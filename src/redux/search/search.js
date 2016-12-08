import { SET_WHERE, SET_WHO, SET_POSITION, RESET_POSITION } from './search.actions'

export const initState = { where: '', who: [], position: { lat: 46.1279141, lng: -2.2770196 }, zoom: 6 }
export const initAction = { type: 'UNKNOWN' }

export default (state = initState, { type, payload } = initAction) => {
  switch (type) {
    case SET_WHERE:
      return { ...state, where: payload }
    case SET_WHO:
      return { ...state, who: payload }
    case SET_POSITION:
      return { ...state, position: payload }
    case RESET_POSITION:
      return { initState }
    default:
      return state
  }
}
