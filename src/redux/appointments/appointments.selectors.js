import { find, findLast } from 'lodash'

export const getAppointments = ({ appointments }) => appointments
export const getAppointment = ({ appointments }, id) => find(appointments, { id: id })
export const getAppointmentByDoctor = ({ appointments }, id) => findLast(appointments, { idDoctor: id })

