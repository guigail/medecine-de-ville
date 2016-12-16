import { FETCH_DOCTORS } from 'redux/doctors'
import { SET_WHO, SET_WHERE } from 'redux/search'

import {
  SET_DRAWER_ACTIVE, SET_DRAWER_PINNED,
  SET_DIALOG_ACTIVE,
  SET_SIDEBAR_PINNED,
  SET_FILTERS_ACTIVE,
} from './ui.actions'

export const initState = {
  drawer: {
    active: false,
    pinned: false,
  },
  sidebar: {
    pinned: false,
  },
  filters: {
    active: false,
  },
  dialog: {
    active: false,
  },
  timestamps: {},
}

export const initAction = { type: 'UNKNOWN' }

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case SET_DRAWER_ACTIVE:
      return { ...state, drawer: { active: action.payload } }
    case SET_FILTERS_ACTIVE:
      return { ...state, filters: { active: action.payload } }
    case SET_DRAWER_PINNED:
      return { ...state, drawer: { pinned: action.payload } }
    case SET_SIDEBAR_PINNED:
      return { ...state, sidebar: { pinned: action.payload } }
    case SET_DIALOG_ACTIVE:
      return { ...state, dialog: { active: action.payload } }
    case FETCH_DOCTORS:
    case SET_WHERE:
    case SET_WHO:
      if (!action.payload) return state
      return { ...state, timestamps: { [action.type]: action.payload } }
    default:
      return state
  }
}
