import { connect } from 'react-redux'
import Gitalong from '../components/Gitalong'

function mapStateToProps(state, ownProps) {
  debugger
  return {
    user: state.get('user')
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Gitalong)
