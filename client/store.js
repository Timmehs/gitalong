import { fromJS } from 'immutable'
import { createStore } from 'redux'
import reducers from './reducers'
import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from './logger'

function initializeState() {
  const anchorNode = document.getElementById('main')
  const rawUser = anchorNode.getAttribute('data-user')
  const user = rawUser !== 'undefined' ? JSON.parse(rawUser) : null

  return fromJS({
    user: user,
    feedParams: {
      following: true,
      followers: true,
      me: true
    },
    repos: [],
    ui: {
      loading: {}
    }
  })
}

export default function() {
  const store = createStore(
    reducers,
    initializeState(),
    applyMiddleware(thunkMiddleware, logger)
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
