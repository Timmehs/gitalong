const User = require('../models/User')
const { getReposForUsers } = require('./repo-service')
const { github, githubOptions } = require('../lib/github')
const dedupeIDs = require('../lib/dedupeIDs')
const Promise = require('bluebird')

/**
 * Accepts current user and the name of a relationship.
 * Pings Github for updated followers/following/???, with associated Etag.
 * If 304, populate association from database.
 * If 200 (new data), upsert all users to DB, update association (user ids) and Etag on currentUser, then populate from DB
 *
 * @param
 * @returns
 */
function updateAssociatedUsers(currentUser, relationship) {
  const etagProp = `${relationship}Etag`
  const capitalizedRelationship =
    relationship.charAt(0).toUpperCase() + relationship.substring(1)
  const githubClientFunction = `get${capitalizedRelationship}ForUser`
  const githubClientOpts = githubOptions(currentUser, currentUser[etagProp])

  return github(currentUser)
    .users[githubClientFunction](githubClientOpts)
    .then(({ meta, data }) => {
      if (meta.status === '200 OK') {
        return Promise.all(buildAndSaveUsers(data)).then(savedUsers => {
          currentUser.set({
            [relationship]: savedUsers.map(({ _id }) => _id),
            [etagProp]: meta.etag
          })
          return currentUser.save()
        })
      } else {
        return currentUser
      }
    })
    .catch(e => {
      throw Error(e)
    })
}

function fullCommunitySync(currentUser) {
  return updateAssociatedUsers(currentUser, 'following')
    .then(user => updateAssociatedUsers(currentUser, 'followers'))
    .then(user => {
      const ids = dedupeIDs(
        user.following.concat(user.followers).concat([user._id])
      )
      return getReposForUsers(ids, currentUser, true)
    })
    .then(user => {
      currentUser.set('lastSyncedAt', Date.now())
      return currentUser.save()
    })
}

function serializeUser(mongodbUser) {
  const { login, githubUrl, avatarUrl } = mongodbUser
  return {
    login,
    githubUrl,
    avatarUrl
  }
}

/* Helper Functions */
function serializeGithubUser(json) {
  return {
    avatarUrl: json.avatar_url,
    githubUrl: json.html_url,
    login: json.login,
    githubId: json.id
  }
}

/**
 * Take JSON array of users from Github API response (followers/following), and serialize to Gitalong User props.
 * Returns an array of unresolved promises to be handled by Promise.all()
 *
 * @param {string} usersJSON
 * @returns {Array<Promise>}
 */
function buildAndSaveUsers(usersJSON) {
  return usersJSON.map(json => {
    const options = { upsert: true, rawResult: true, new: true }
    const start = Date.now()
    return User.findOneAndUpdate(
      {
        githubId: json.id
      },
      serializeGithubUser(json),
      options
    )
      .exec()
      .then(result => {
        const newUser = result.lastErrorObject.updatedExisting ? '' : '(new)'
        console.log(
          'Upserted user ' + json.login + ` ${Date.now() - start}ms ${newUser}`
        )
        return result.value
      })
  })
}

module.exports = {
  updateAssociatedUsers,
  fullCommunitySync
}
