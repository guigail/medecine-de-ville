export const SET_DRAWER_ACTIVE = 'SET_DRAWER_ACTIVE'
export const SET_DRAWER_PINNED = 'SET_DRAWER_PINNED'
export const SET_SIDEBAR_PINNED = 'SET_SIDEBAR_PINNED'

export const setDrawerActive = (active) => {
  return {
    type: SET_DRAWER_ACTIVE,
    payload: active,
  }
}

export const setDrawerPinned = (pinned) => {
  return {
    type: SET_DRAWER_PINNED,
    payload: pinned,
  }
}

export const setSidebarPinned = (pinned) => {
  return {
    type: SET_SIDEBAR_PINNED,
    payload: pinned,
  }
}