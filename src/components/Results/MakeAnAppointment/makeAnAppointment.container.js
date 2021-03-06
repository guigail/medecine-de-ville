import { connect } from 'react-redux'
import { getDialogActive } from 'redux/ui'
import { getAppointmentByDoctor } from 'redux/appointments'
import { getSelected } from 'redux/doctors'
import Component from './makeAnAppointment'
import { makeAnAppointment, cancelAnAppointment, closeDialog } from './makeAnAppointment.actions'

const mapStateToProps = (state) => {
  const doctorSelected = getSelected(state)

  return {
    doctorSelected,
    appointment: getAppointmentByDoctor(state, doctorSelected.merchantId),
    active: getDialogActive(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  makeAnAppointment: date => dispatch(makeAnAppointment(date)),
  closeDialog: () => dispatch(closeDialog()),
  cancelAnAppointment: appointment => dispatch(cancelAnAppointment(appointment)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
