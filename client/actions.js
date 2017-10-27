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

export const SET_REPO_STAT = 'SET_REPO_STAT'
export function setRepoStat(statName, value) {
  return { type: SET_REPO_STAT, statName, value }
}

export const SET_LOADING = 'SET_LOADING'
export function setLoading(uiKey, isLoading) {
  return { type: SET_LOADING, uiKey, isLoading }
}

export function refreshFeed() {
  return function(dispatch, getState) {
    const currentParams = getState().get('feedParams')
    const feedQuery = feedQueryString(currentParams)

    dispatch(setLoading('repos', true))

    get('/user/repos' + feedQuery).then(data => {
      dispatch(setLoading('repos', false))
      dispatch(setRepos(data.repos))
      dispatch(setRepoStat('languages', data.languages))
    })
  }
}
