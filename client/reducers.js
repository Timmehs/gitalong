import {
  SET_FEED_PARAMS,
  SET_REPOS,
  SET_REPO_STAT,
  SET_LOADING
} from './actions'
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
        return state.set('data', fromJS(action.repos))
      case SET_REPO_STAT:
        return state.setIn(['stats', action.statName], fromJS(action.value))
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

export default combineReducers({ user, ui, repos, feedParams })
