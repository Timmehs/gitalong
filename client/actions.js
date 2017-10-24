import { get } from 'client/util/fetch'
import feedQueryString from 'client/util/feedQueryString'

export const SET_FEED_PARAMS = 'SET_FEED_PARAMS'
export function setFeedParams(params) {
  return { type: SET_FEED_PARAMS, params }
}

export const SET_REPOS = 'SET_REPOS'
export function setRepos(repos) {
  return { type: SET_REPOS, repos }
}

export function refreshFeed() {
  return function(dispatch, getState) {
    const currentParams = getState().get('feedParams')
    const feedQuery = feedQueryString(currentParams)
    get('/user/repos' + feedQuery).then(data => {
      dispatch(setRepos(data.repos))
    })
  }
}
