/*
 const appointments = [
 {
 id : 1,
 doctorId : 1,
 date : date(),
 }
 ]
 */

import { remove } from 'lodash'
import { SET_APPOINTMENTS, ADD_APPOINTMENT, SET_APPOINTMENT, DELETE_APPOINTMENT } from './appointments.actions'
export const initState = []
export const initAction = { type: 'UNKNOWN' }

export default (state = initState, { type, payload } = initAction) => {
  switch (type) {
    case SET_APPOINTMENTS:
      return payload
    case SET_APPOINTMENT:
      return state.map(a => (a.id === payload.id) ? payload : a)
    case ADD_APPOINTMENT:
      state.push({ ...payload, id: state.length + 1 })
      return state
    case DELETE_APPOINTMENT:
      return remove(state, a => a.idDoctor !== payload.idDoctor)
    default:
      return state
  }
}