const User = require('../models/User')
const Repo = require('../models/Repo')
const { github, githubOptions } = require('../lib/github')
const Promise = require('bluebird')

function getReposForUsers(userIds, currentUser, update = false) {
  if (update) {
    return User.find({ _id: { $in: userIds } }).then(users =>
      Promise.all(users.map(u => getReposForUser(u, currentUser)))
    )
  } else {
    return Repo.find({ owner: { $in: userIds } })
  }
}

/**
 * For a given list of repos, return a count of languages
 *
 * @param {Repo[]}
 * @returns {Object} dictionary of languages and their counts
 */
function getLanguageStats(repoList) {
  return repoList.reduce((stats, { language }) => {
    if (language) {
      if (stats[language]) stats[language] += 1
      else stats[language] = 1
    }
    return stats
  }, {})
}

function repoQuery(opts) {
  const page = opts.page || 1
  return Repo.find({ owner: { $in: opts.ids } })
    .skip((page - 1) * 25)
    .limit(25)
    .sort({ pushedAt: -1 })
    .populate('owner')
    .select(
      'name githubId pushedAt createdAt language stargazersCount htmlUrl owner description ownerLogin topics'
    )
}

/**
 * Refresh User repos from Github.
 *
 * @param {Model} user - the user whose repos we are updatedExisting
 * @param {Model} currentUser - the user making the request
 * @returns
 */
function getReposForUser(user, currentUser) {
  const opts = {
    ...githubOptions(user, user.reposEtag),
    sort: 'pushed',
    per_page: 5
  }
  return github(currentUser)
    .repos.getForUser(opts)
    .then(({ meta, data }) => {
      if (meta.status === '200 OK') {
        const serializedRepos = data.map(repo => serializeRepo(repo, user))
        return Promise.all(upsertRepos(serializedRepos)).then(repos => {
          user.set({
            repos: repos.map(({ _id }) => _id),
            reposEtag: meta.etag
          })
          return user.save()
        })
      } else if (meta.status === '304 Not Modified') {
        return user
      }
    })
    .then(user => Repo.find({ owner: user._id }))
    .catch(err => {
      throw Error(err)
    })
}

/**
 * @private
 */
function serializeRepo(repoJSON, user) {
  return {
    name: repoJSON.name,
    githubId: repoJSON.id,
    ownerLogin: repoJSON.owner.login,
    language: repoJSON.language,
    owner: user._id,
    pushedAt: repoJSON.pushed_at,
    createdAt: repoJSON.created_at,
    topics: repoJSON.topics,
    stargazersCount: repoJSON.stargazers_count,
    watchers: repoJSON.watchers,
    htmlUrl: repoJSON.html_url,
    description: repoJSON.description
  }
}

/**
 * @private
 */
function upsertRepos(serializedRepos) {
  return serializedRepos.map(data => {
    const options = { upsert: true, rawResult: true, new: true }
    const start = Date.now()
    return Repo.findOneAndUpdate(
      {
        githubId: data.githubId
      },
      data,
      options
    )
      .exec()
      .then(({ lastErrorObject, value: repo }) => {
        const newRepo = lastErrorObject.updatedExisting ? '' : '(new)'
        console.log(
          'Upserted repo ' + repo.name + ` ${Date.now() - start}ms ${newRepo}`
        )
        return repo
      })
  })
}

module.exports = {
  getReposForUsers,
  getReposForUser,
  getLanguageStats,
  repoQuery
}
