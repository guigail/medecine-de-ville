import {
  SET_FILTERS,
  SET_FILTER_NAME,
  SET_FILTER_RAC,
  DELETE_FILTERS,
} from './filters.actions'

export const initState = { RAC: [0, 100], name: '' }
export const initAction = { type: 'UNKNOWN' }

export default (state = initState, { type, payload } = initAction) => {
  switch (type) {
    case SET_FILTERS:
      return payload
    case SET_FILTER_NAME:
      return { ...state, name: payload }
    case SET_FILTER_RAC:
      return { ...state, RAC: payload }
    case DELETE_FILTERS:
      return initState
    default:
      return state
  }
}
