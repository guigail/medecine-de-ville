import { setDrawerActive, setDrawerPinned, getDrawerActive, getDrawerPinned } from 'redux/ui'

export const toggleDrawerActive = () => (dispatch, getState) => {
  dispatch(setDrawerActive(
    !getDrawerActive(getState())
  ))
}

export const toggleDrawerPinned = () => (dispatch, getState) => {
  dispatch(setDrawerPinned(
    !getDrawerPinned(getState())
  ))
}