import { connect } from 'react-redux'
import { getVisible } from 'redux/doctors'
import { getWhat } from 'redux/search'
import Component from './doctors.list'

const mapStateToProps = (state) => {
  const doctors = getVisible(state)
  const what = getWhat(state)
  return {
    doctors,
    what,
  }
}

export default connect(mapStateToProps)(Component)
