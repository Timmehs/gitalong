import { connect } from 'react-redux'
import Gitalong from '../components/Gitalong'

function mapStateToProps(state, ownProps) {
  return {
    feedFilter: ownProps.match.params.filter,
    user: state.get('user')
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Gitalong)
