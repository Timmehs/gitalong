import { connect } from 'react-redux'
import Feed from '../components/Feed'
import { refreshFeed, setFeedParams } from '../actions'
import { Map as ImmMap } from 'immutable'

function mapStateToProps(state, { filter }) {
  return {
    filter,
    user: state.get('user'),
    languages: state.getIn(['repos', 'stats', 'languages'], new ImmMap())
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
