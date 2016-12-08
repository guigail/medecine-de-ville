import { selectDoctor } from 'redux/doctors'
import { addAppointment } from 'redux/appointments'
import { setSidebarPinned, getSidebarPinned } from 'redux/ui'

export const makeAnAppointment = (appointment) => (dispatch, getState) => {
  dispatch(addAppointment(appointment))
}