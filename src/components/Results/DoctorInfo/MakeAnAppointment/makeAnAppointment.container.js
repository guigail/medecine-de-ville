import { connect } from 'react-redux'
import Component from './makeAnAppointment'
import { makeAnAppointment, cancelAnAppointment } from './makeAnAppointment.actions'
import { getAppointmentByDoctor } from 'redux/appointments'

const mapStateToProps = (state, { idDoctor = 2 }) => {
  const appointment = getAppointmentByDoctor(state, idDoctor)
  return {
    idDoctor,
    appointment,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeAnAppointment: (idDoctor, date, time) => dispatch(makeAnAppointment(idDoctor, date, time)),
    cancelAnAppointment: (appointment) => dispatch(cancelAnAppointment(appointment)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
