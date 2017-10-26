import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import reducers from './reducers'
import configureStore from './store'
import './styles/main.scss'
import Root from './components/Root'
const rootEl = document.getElementById('main')
const store = configureStore()

function renderApp(component) {
  render(<AppContainer>{component}</AppContainer>, rootEl)
}

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    require('./components/Root')
    try {
      const nextComponent = <Root store={store} />
      renderApp(nextComponent)
    } catch (e) {
      console.log('HMR Error')
      console.error(e)
      debugger
      location.reload()
    }
  })
}

renderApp(<Root store={store} />)
