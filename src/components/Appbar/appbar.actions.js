import { setDrawerActive, getDrawerActive } from 'redux/ui'

export const toggleDrawerActive = () => (dispatch, getState) =>
  dispatch(setDrawerActive(!getDrawerActive(getState())))
