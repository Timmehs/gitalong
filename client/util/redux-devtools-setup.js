import { compose } from 'redux'
import Immutable from 'immutable'

const useDevTools = environment =>
  environment === 'production' ||
  typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'undefined'

export default function(environment) {
  if (useDevTools(environment)) {
    return compose
  } else {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      serialize: {
        immutable: Immutable
      }
    })
  }
}
