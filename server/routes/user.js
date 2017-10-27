/* User Routes */
const router = require('express').Router()

const {
  updateAssociatedUsers,
  fullCommunitySync
} = require('../services/user-service')

const {
  getReposForUser,
  getReposForUsers,
  repoQuery,
  getLanguageStats
} = require('../services/repo-service')
const Repo = require('../models/Repo')

const dedupeIDs = require('../lib/dedupeIDs')
const elapsedTime = require('../lib/elapsedTime')

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

function getRequiredIds(query, user) {
  const ids = ['following', 'followers'].reduce(function(result, param) {
    return query[param] ? result.concat(user[param]) : result
  }, [])

  if (query.me) ids.push(user._id)

  return dedupeIDs(ids)
}

router.get('/repos', ({ user, query }, res) => {
  const minutesSinceSync = elapsedTime(user.lastSyncedAt, 'm')
  if (minutesSinceSync && minutesSinceSync < 10) {
    console.log(`Skipping sync (Sync was ${minutesSinceSync}m ago)`)
    queryPromise = repoQuery(getRequiredIds(query, user))
  } else {
    console.log('Syncing with Github..')
    queryPromise = fullCommunitySync(user).then(() =>
      repoQuery(getRequiredIds(query, user))
    )
  }

  queryPromise.then(repos => {
    const stats = getLanguageStats(repos)
    res.send({ repos: repos, languages: stats })
  })
})

module.exports = router
