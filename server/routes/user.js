/* User Routes */
const router = require('express').Router()
const { updateAssociatedUsers} = require('../services/user-service')
const {
  getReposForUser,
  getReposForUsers
} = require('../services/repo-service')

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
  let userIds = []
  if (query.following) userIds.push(...user.following)
  if (query.followers) userIds.push(...user.followers)

  getReposForUsers(userIds, user, true).then(repos => {
    res.send({ repos: repos })
  })
})

module.exports = router
