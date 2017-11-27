import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import configureStore from './store'
import './styles/main.scss'
import Root from './components/Root'
const rootEl = document.getElementById('main')
const store = configureStore()

function renderApp(component) {
  render(<AppContainer>{component}</AppContainer>, rootEl)
}

renderApp(<Root store={store} />)

if (module.hot) {
  module.hot.accept()
}
