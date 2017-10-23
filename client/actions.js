import { get } from 'client/util/fetch'

export const SET_FEED_PARAMS = 'SET_FEED_PARAMS'
export function setFeedParams(params) {
  return { type: SET_FEED_PARAMS, params }
}

// feedParams = () {
//   const { repoParasm } = this.state
//   const params = Object.keys(feedParams).reduce((result, key) => {
//     result.push(`${encodeURIComponent(key)}=${encodeURIComponent(feedParams[key])}`)
//   }, []).join('&')
//   return '?' + params
// }
//
// getRepos = () => {
//   const { includeFollowing, includeFollowers } = this.state
//   let url = '/user/repos' + this.feedParams()
//   this.setState({ loading: true }, () => {
//     get(url)
//       .then(json => {
//         if (json.repos) {
//           this.setState({ repos: json.repos, loading: false })
//         } else {
//           throw Error('No repos return')
//         }
//       })
//       .catch(err => {
//         console.error(err)
//       })
//   })
// }

export const SET_REPOS = 'SET_REPOS'
export function setRepos(repos) {
  return { type: SET_REPOS, repos }
}

export function refreshFeed(params = {}) {
  return function(dispatch, getState) {
    const currentParams = getState().get('feedParams')
    if (params) dispatch(setFeedParams(params))
    // Set Loading State

    // Send request to refresh repos
    // - Callback setRepos(results)
  }
}
