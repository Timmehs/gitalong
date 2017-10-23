import SET_FEED_PARAMS from './actions'
import SET_REPOS from './actions'

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
      default:
        return state
    }
  }
}

function repos(action) {
  return function(state) {
    switch (action.type) {
      case SET_REPOS:
        return action.repos
      default:
        return state
    }
  }
}

function feedParams(action) {
  return function(state) {
    switch (action.type) {
      case SET_FEED_PARAMS:
        console.log(SET_FEED_PARAMS)
        return state.set(key, val)
      default:
        return state
    }
  }
}

function reducer(state, action) {
  return state
    .update(feedParams(action))
    .update(repos(action))
    .update(user(action))
    .update(ui(action))
}

export default reducer
