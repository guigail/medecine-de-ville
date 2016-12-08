import {
  SET_DRAWER_ACTIVE, SET_DRAWER_PINNED,
  SET_SIDEBAR_PINNED,
} from './ui.actions'

export const initState = {
  drawer: {
    active: false,
    pinned: false,
  },
  sidebar: {
    pinned: false,
  },
}

export const initAction = { type: 'UNKNOWN' }

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case SET_DRAWER_ACTIVE:
      return { ...state, drawer: { active: action.payload } }
    case SET_DRAWER_PINNED:
      return { ...state, drawer: { pinned: action.payload } }
    case SET_SIDEBAR_PINNED:
      return { ...state, sidebar: { pinned: action.payload } }
    default:
      return state
  }
}
