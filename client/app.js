import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import reducers from './reducers'
import configureStore from './store'
import './styles/main.scss'
import Root from './components/Root'
const rootEl = document.getElementById('main')

render(
  <AppContainer>
    <Root store={configureStore()} />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    try {
      render(
        <AppContainer>
          <Root store={configureStore()} />
        </AppContainer>,
        rootEl
      )
    } catch (e) {
      console.log('HMR Error')
      console.error(e)
      debugger
      location.reload()
    }
  })
}
