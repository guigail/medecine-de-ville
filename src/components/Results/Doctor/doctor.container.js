import { connect } from 'react-redux'
import { result } from 'lodash'
import { getAppointmentByDoctor } from 'redux/appointments'
import Component from './doctor'
import { select } from './doctor.actions'


const mapStateToProps = (state, { doctor: { id, ...doctor } }) => {
  const selected = result(doctor, 'ui.selected')
  return {
    id,
    doctor,
    selected,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectDoctor: id => dispatch(select(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
