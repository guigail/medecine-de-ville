export const SET_DRAWER_ACTIVE = 'SET_DRAWER_ACTIVE'
export const setDrawerActive = active => ({ type: SET_DRAWER_ACTIVE, payload: active })

export const SET_DRAWER_PINNED = 'SET_DRAWER_PINNED'
export const setDrawerPinned = pinned => ({ type: SET_DRAWER_PINNED, payload: pinned })

export const SET_SIDEBAR_PINNED = 'SET_SIDEBAR_PINNED'
export const setSidebarPinned = pinned => ({ type: SET_SIDEBAR_PINNED, payload: pinned })

export const SET_FILTERS_ACTIVE = 'SET_FILTERS_ACTIVE'
export const setFiltersActive = active => ({ type: SET_FILTERS_ACTIVE, payload: active })

export const SET_DIALOG_ACTIVE = 'SET_DIALOG_ACTIVE'
export const setDialogActive = active => ({ type: SET_DIALOG_ACTIVE, payload: active })
