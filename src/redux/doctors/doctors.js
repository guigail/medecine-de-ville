import { update } from 'lodash'
import {
  SET_DOCTORS,
  RESET_DOCTORS,
  SET_DOCTOR,
  SELECT_DOCTOR,
  UNSELECT_DOCTORS,
} from './doctors.actions'

export const initState = []
export const initAction = { type: 'UNKNOWN' }

export default (state = initState, { type, payload } = initAction) => {
  switch (type) {
    case SET_DOCTORS:
      return payload
    case SET_DOCTOR:
      return state.map(d => ((d.id === payload.id) ? payload : d))
    case SELECT_DOCTOR:
      return state.map(d => update(d, 'ui.selected', () => d.id === payload.id))
    case UNSELECT_DOCTORS:
      return update(state, 'ui.selected', () => false)
    case RESET_DOCTORS:
      return initState
    default:
      return state
  }
}
