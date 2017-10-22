import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducers from './reducers'
import initializeState from './initializer'

import style from './style.scss'

import GitalongContainer from './containers/GitalongContainer'

const store = createStore(reducers, initializeState())

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <GitalongContainer />
  </Provider>,
  document.getElementById('main')
)
