import { selectDoctor, getDoctor } from 'redux/doctors'
import { setSidebarPinned, getSidebarPinned } from 'redux/ui'

export const showInfo = (id) => (dispatch, getState) => {
  dispatch(selectDoctor(getDoctor(getState(), id)))
  if (!getSidebarPinned(getState())) {
    dispatch(setSidebarPinned(true))
  }
}