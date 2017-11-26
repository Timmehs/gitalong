const { repoQuery, getLanguageStats } = require('../services/repo-service')
const elapsedTime = require('../lib/elapsedTime')

const router = require('express').Router()

const {
  fullCommunitySync,
  getRequiredIds
} = require('../services/user-service')

router.get('/', ({ user, query }, res) => {
  const minutesSinceSync = elapsedTime(user.lastSyncedAt, 'm')
  let queryPromise
  if (minutesSinceSync && minutesSinceSync < 10) {
    console.log(`Skipping sync (Sync was ${minutesSinceSync}m ago)`)
    queryPromise = repoQuery({
      ids: getRequiredIds(query, user),
      params: query
    })
  } else {
    console.log('Syncing with Github..')
    queryPromise = fullCommunitySync(user).then(() =>
      repoQuery({ ids: getRequiredIds(query, user) })
    )
  }

  queryPromise.then(repos => {
    const stats = getLanguageStats(repos)
    res.send({ repos: repos, languages: stats })
  })
})

module.exports = router
