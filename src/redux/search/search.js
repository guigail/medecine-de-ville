import { SET_WHERE, SET_WHAT, SET_POSITION, RESET_POSITION } from './search.actions'

export const initState = { where: '', what: '', position: { lat: 47.2382007, lng: -1.6307596 }, zoom: 12 }
export const initAction = { type: 'UNKNOWN' }

export default (state = initState, { type, payload } = initAction) => {
  switch (type) {
    case SET_WHERE:
      return { ...state, where: payload }
    case SET_WHAT:
      return { ...state, what: payload }
    case SET_POSITION:
      return { ...state, position: payload }
    case RESET_POSITION:
      return { initState }
    default:
      return state
  }
}
