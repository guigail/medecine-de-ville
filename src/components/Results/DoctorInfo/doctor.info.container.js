import { connect } from 'react-redux'
import Component from './doctor.info'

const mapStateToProps = (state, { doctor }) => {
  return {
    doctor,
  }
}

export default connect(mapStateToProps)(Component)
