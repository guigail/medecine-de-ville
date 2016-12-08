import { addAppointment, deleteAppointment, getAppointmentByDoctor } from 'redux/appointments'

export const makeAnAppointment = (idDoctor, date, time) => (dispatch) => {
  dispatch(addAppointment({ idDoctor, date, time }))
}

export const cancelAnAppointment = appointment => (dispatch) => {
  dispatch(deleteAppointment(appointment))
}
