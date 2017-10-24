import { SET_FEED_PARAMS, SET_REPOS, SET_LOADING } from './actions'
import { fromJS } from 'immutable'

function user(action) {
  return function(state) {
    switch (action.type) {
      default:
        return state
    }
  }
}

function ui(action) {
  return function(state) {
    switch (action.type) {
      case SET_LOADING:
        return state.setIn(['loading', action.uiKey], action.isLoading)
      default:
        return state
    }
  }
}

function repos(action) {
  return function(state) {
    switch (action.type) {
      case SET_REPOS:
        return fromJS(action.repos)
      default:
        return state
    }
  }
}

function feedParams(action) {
  return function(state) {
    switch (action.type) {
      case SET_FEED_PARAMS:
        return state.merge(fromJS(action.params))
      default:
        return state
    }
  }
}

function combineReducers(reducers) {
  return function(state, action) {
    return Object.entries(reducers).reduce((state, [subtree, reducer]) => {
      return state.update(subtree, reducer(action))
    }, state)
  }
}

// function reducer(state, action) {
//   return state
//     .update(feedParams(action))
//     .update(repos(action))
//     .update(user(action))
//     .update(ui(action))
// }

export default combineReducers({ user, ui, repos, feedParams })
