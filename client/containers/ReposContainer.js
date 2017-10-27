import { connect } from 'react-redux'
import Repos from 'client/components/Repos'
import { refreshFeed } from 'client/actions'

function mapStateToProps(state) {
  return {
    repos: state.getIn(['repos', 'data']),
    fetchingRepos: state.getIn(['ui', 'loading', 'repos'], false)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    refreshFeed: () => dispatch(refreshFeed())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Repos)
