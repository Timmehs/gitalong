import { connect } from 'react-redux'
import Repos from 'client/components/Repos'
import { refreshFeed } from 'client/actions'

function mapStateToProps(state) {
  return {
    repos: state.get('repos')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    refreshFeed: () => dispatch(refreshFeed())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Repos)
