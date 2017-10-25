import { createLogger } from 'redux-logger'
import { Iterable } from 'immutable'

export default createLogger({
  // Make immutable state readable in logs
  stateTransformer: state => {
    if (Iterable.isIterable(state)) return state.toJS()
    else return state
  }
})
