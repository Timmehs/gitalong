import { Provider } from 'react-redux'
import GitalongContainer from 'client/containers/GitalongContainer'
import { BrowserRouter as Router, Route } from 'react-router'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={GitalongContainer} />
    </Router>
  </Provider>
)

export default Root
