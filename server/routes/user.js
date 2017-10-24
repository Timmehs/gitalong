/* User Routes */
const router = require('express').Router()
const {
  updateAssociatedUsers,
  fullCommunitySync
} = require('../services/user-service')

const {
  getReposForUser,
  getReposForUsers
} = require('../services/repo-service')
const Repo = require('../models/Repo')

const dedupeIDs = require('../lib/dedupeIDs')

router.use(require('../lib/passport').ensureAuthenticated)

router.get('/following', ({ user }, res) => {
  updateAssociatedUsers(user, 'following')
    .then(user => user.populate('following').execPopulate())
    .then(currentUser => res.send({ following: currentUser.following }))
})

router.get('/followers', ({ user }, res) => {
  updateAssociatedUsers(user, 'followers')
    .then(user => user.populate('followers').execPopulate())
    .then(currentUser => res.send({ followers: currentUser.followers }))
})

router.get('/repos', ({ user, query }, res) => {
  const page = query.page * 25
  const ids = ['following', 'followers'].reduce(function(result, param) {
    return query[param] ? result.concat(user[param]) : result
  }, [])

  if (query.me) ids.push(user._id)

  let userIds = dedupeIDs(ids)

  Repo.find({ owner: { $in: userIds } })
    .limit(25)
    .sort({ pushedAt: -1 })
    .select(
      'name githubId pushedAt createdAt language stargazersCount htmlUrl description ownerLogin'
    )
    .then(repos => {
      res.send({ repos: repos })
    })
})

module.exports = router
