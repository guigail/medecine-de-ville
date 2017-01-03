export const SET_APPOINTMENTS = 'SET_APPOINTMENTS'
export const setAppointments = appointments => ({ type: SET_APPOINTMENTS, payload: appointments })

export const SET_APPOINTMENT = 'SET_APPOINTMENT'
export const setAppointment = appointment => ({ type: SET_APPOINTMENT, payload: appointment })

export const ADD_APPOINTMENT = 'ADD_APPOINTMENT'
export const addAppointment = appointment => ({ type: ADD_APPOINTMENT, payload: appointment })

export const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT'
export const deleteAppointment = appointment => ({ type: DELETE_APPOINTMENT, payload: appointment })
