import { result } from 'lodash'
import { connect } from 'react-redux'
import { getAppointmentByDoctor } from 'redux/appointments'
import Component from './doctor.summary'
import { showAppointment } from './doctor.summary.actions'


const mapStateToProps = (state, { doctor: { id, ...doctor } }) => {
  const appointment = getAppointmentByDoctor(state, id)
  const selected = result(doctor, 'ui.selected')
  return {
    id,
    doctor,
    selected,
    haveAppointment: appointment,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showAppointment: id => dispatch(showAppointment(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
