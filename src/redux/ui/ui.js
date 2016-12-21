import { update } from 'lodash'
import { FETCH_DOCTORS } from 'redux/doctors'
import { SET_WHO, SET_WHERE, SET_SEARCH } from 'redux/search'

import {
  SET_DRAWER_ACTIVE, SET_DRAWER_PINNED,
  SET_DIALOG_ACTIVE,
  SET_SIDEBAR_PINNED,
  SET_FILTERS_ACTIVE,
  SET_MESSAGES_ACTIVE,
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
    active: true,
  },
  dialog: {
    active: false,
  },
  messages: {
    active: false,
  },
  timestamps: { fetch: new Date().getTime(), touch: new Date().getTime()},
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
    case SET_MESSAGES_ACTIVE:
      return { ...state, messages: { active: action.payload } }
    case FETCH_DOCTORS:
      return update(state, 'timestamps.fetch', () => new Date().getTime())
    case SET_WHERE:
    case SET_WHO:
    case SET_SEARCH:
      return update(state, 'timestamps.touch', () => new Date().getTime())
    default:
      return state
  }
}
