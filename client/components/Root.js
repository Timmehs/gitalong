import { Provider } from 'react-redux'
import GitalongContainer from 'client/containers/GitalongContainer'
// Eventually add router config here
const Root = ({ store }) => (
  <Provider store={store}>
    <GitalongContainer />
  </Provider>
)

export default Root
