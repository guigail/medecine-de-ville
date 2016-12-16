import { addAppointment, deleteAppointment, getAppointmentByDoctor } from 'redux/appointments'
import { setDialogActive, getDialogActive } from 'redux/ui'

export const closeDialog = () => (dispatch, getState) => {
  dispatch(setDialogActive(!getDialogActive(getState())))
}

export const makeAnAppointment = (idDoctor, date, time) => (dispatch) => {
  dispatch(addAppointment({ idDoctor, date, time }))
  closeDialog()
}

export const cancelAnAppointment = appointment => (dispatch) => {
  dispatch(deleteAppointment(appointment))
}
