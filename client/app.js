import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'

import reducers from './reducers'
import initializeState from './initializer'

import './styles/main.scss'

import GitalongContainer from './containers/GitalongContainer'

const loggerMiddleware = createLogger()
const store = createStore(
  reducers,
  initializeState(),
  applyMiddleware(thunkMiddleware, loggerMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <GitalongContainer />
  </Provider>,
  document.getElementById('main')
)
