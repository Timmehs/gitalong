import { fromJS } from 'immutable'

function initializeState() {
  const anchorNode = document.getElementById('main')
  const rawUser = anchorNode.getAttribute('data-user')
  const user = rawUser !== 'undefined' ? JSON.parse(rawUser) : null

  return fromJS({
    user: user,
    feedParams: {
      includeFollowing: true,
      includeFollowers: true,
      includeMe: true
    },
    repos: [],
    ui: {}
  })
}

export default initializeState
