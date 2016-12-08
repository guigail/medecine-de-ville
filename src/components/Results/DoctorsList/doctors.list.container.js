import { connect } from 'react-redux'
import Component from './doctors.list'

const mapStateToProps = ({ doctors, search : { who } }) => {
  return {
    doctors,
    who,
  }
}

export default connect(mapStateToProps)(Component)
