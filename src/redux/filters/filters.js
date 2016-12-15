import { SET_FILTERS, DELETE_FILTERS } from './filters.actions'
export const initState = { RAC: [], name: '' }
export const initAction = { type: 'UNKNOWN' }

export default (state = initState, { type, payload } = initAction) => {
  switch (type) {
    case SET_FILTERS:
      return payload
    case DELETE_FILTERS:
      return initState
    default:
      return state
  }
}