/*
 const appointments = [
 {
 id : 1,
 doctorId : 1,
 date : '13/01/2017',
 time : '12:00',
 }
 ]
 */

import { SET_APPOINTMENTS, ADD_APPOINTMENT, SET_APPOINTMENT, DELETE_APPOINTMENT } from './appointments.actions'
import { remove } from 'lodash'
export const initState = []
export const initAction = { type: 'UNKNOWN' }

export default (state = initState, { type, payload } = initAction) => {
  switch (type) {
    case SET_APPOINTMENTS:
      return payload
    case SET_APPOINTMENT:
      return state.map(a => (a.id == payload.id) ? payload : a)
    case ADD_APPOINTMENT:
      state.push({ ...payload, id: state.length + 1 })
      return state
    case DELETE_APPOINTMENT:
      console.log(payload)
      return remove(state, (a) => a.idDoctor != payload.idDoctor)
    default:
      return state
  }
}