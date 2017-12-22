import { fromJS } from 'immutable'
import buildCompose from './util/redux-devtools-setup'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
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
    repos: {
      data: [],
      stats: {}
    },
    ui: {
      loading: {}
    }
  })
}

export default function() {
  const store = createStore(
    reducers,
    initializeState(),
    buildCompose(process.env.NODE_ENV)(applyMiddleware(thunkMiddleware, logger))
  )

  return store
}
