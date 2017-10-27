import { connect } from 'react-redux'
import Feed from '../components/Feed'
import { refreshFeed, setFeedParams } from '../actions'
import { Map as ImmMap } from 'immutable'

function mapStateToProps(state) {
  return {
    following: state.getIn(['feedParams', 'following']),
    followers: state.getIn(['feedParams', 'followers']),
    user: state.get('user'),
    me: state.getIn(['feedParams', 'me']),
    languages: state.getIn(['repos', 'stats', 'languages'], new ImmMap())
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // For checkbox params
    toggleFeedParam: ({ target }) => {
      dispatch(setFeedParams({ [target.name]: target.checked }))
      dispatch(refreshFeed())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
