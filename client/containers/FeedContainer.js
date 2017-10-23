import { connect } from 'react-redux'
import Feed from '../components/Feed'
import { refreshFeed } from '../actions'

function mapStateToProps(state) {
  return {
    includeFollowing: state.getIn(['feedParams', 'includeFollowing']),
    includeFollowers: state.getIn(['feedParams', 'includeFollowers']),
    includeMe: state.getIn(['feedParams', 'includeMe'])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // For checkbox params
    toggleFeedParam: ({ target }) => {
      dispatch(refreshFeed({ [target.name]: target.checked }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
