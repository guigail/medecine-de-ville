import { addAppointment, deleteAppointment, getAppointmentByDoctor } from 'redux/appointments'
import { getSelected } from 'redux/doctors'
import { setDialogActive, getDialogActive, setMessagesActive } from 'redux/ui'

export const closeDialog = () => (dispatch, getState) => {
  dispatch(setDialogActive(!getDialogActive(getState())))
}

export const makeAnAppointment = date => (dispatch, getState) => {
  const idDoctor = getSelected(getState()).merchantId
  dispatch(addAppointment({ idDoctor, date }))
  dispatch(closeDialog())
  dispatch(setMessagesActive(true))
}

export const cancelAnAppointment = appointment => (dispatch) => {
  dispatch(deleteAppointment(appointment))
}
