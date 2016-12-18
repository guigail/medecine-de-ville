import { connect } from 'react-redux'
import { getDialogActive } from 'redux/ui'
import { getAppointmentByDoctor } from 'redux/appointments'
import { getSelected } from 'redux/doctors'
import Component from './makeAnAppointment'
import { makeAnAppointment, cancelAnAppointment, closeDialog } from './makeAnAppointment.actions'

const mapStateToProps = (state) => {
  const doctorSelected = getSelected(state)
  const appointment = getAppointmentByDoctor(state, doctorSelected.id)
  const active = getDialogActive(state)

  return {
    doctorSelected,
    appointment,
    active,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeAnAppointment: (idDoctor, date, time) => dispatch(makeAnAppointment(idDoctor, date, time)),
    closeDialog: () => dispatch(closeDialog()),
    cancelAnAppointment: appointment => dispatch(cancelAnAppointment(appointment)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)