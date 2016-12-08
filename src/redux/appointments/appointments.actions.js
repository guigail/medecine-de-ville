export const SET_APPOINTMENTS = 'SET_APPOINTMENTS'

export const ADD_APPOINTMENT = 'ADD_APPOINTMENT'
export const SET_APPOINTMENT = 'SET_APPOINTMENT'

export const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT'

export const setAppointments = (appointments) => {
  return {
    type: SET_APPOINTMENTS,
    payload: appointments,
  }
}

export const setAppointment = (appointment) => {
  return {
    type: SET_APPOINTMENT,
    payload: appointment,
  }
}

export const addAppointment = (appointment) => {
  return {
    type: ADD_APPOINTMENT,
    payload: appointment,
  }
}

export const deleteAppointment = (appointment) => {
  return {
    type: DELETE_APPOINTMENT,
    payload: appointment,
  }
}