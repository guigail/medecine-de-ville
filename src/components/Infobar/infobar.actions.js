import { setSidebarPinned, getSidebarPinned } from 'redux/ui'

export const toggleSidebarPinned = () => (dispatch, getState) =>
  dispatch(setSidebarPinned(!getSidebarPinned(getState())))
