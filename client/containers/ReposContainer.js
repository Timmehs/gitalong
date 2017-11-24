import { connect } from 'react-redux'
import Repos from 'client/components/Repos'
import { refreshFeed } from 'client/actions'

function mapStateToProps(state, { filter }) {
  return {
    filter,
    repos: state.getIn(['repos', 'data']),
    fetchingRepos: state.getIn(['ui', 'loading', 'repos'], false)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    refreshFeed: filter => dispatch(refreshFeed(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Repos)
