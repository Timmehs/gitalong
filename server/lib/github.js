var GitHubApi = require('github')

function githubOptions(user, etag = '') {
  return {
    headers: {
      'If-None-Match': etag
    },
    username: user.login
  }
}

function github(user) {
  return new GitHubApi({
    debug: false,
    Promise: require('bluebird'),
    protocol: 'https',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${user.accessToken}`,
      'user-agent': 'Timmehs'
    },
    followRedirects: false
  })
}

module.exports = {
  github,
  githubOptions
}
