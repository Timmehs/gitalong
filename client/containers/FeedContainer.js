import { connect } from 'react-redux'
import Feed from '../components/Feed'
import { refreshFeed, setFeedParams } from '../actions'

function mapStateToProps(state) {
  return {
    following: state.getIn(['feedParams', 'following']),
    followers: state.getIn(['feedParams', 'followers']),
    reposLoaded: state.get('repos').size > 0,
    me: state.getIn(['feedParams', 'me'])
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
