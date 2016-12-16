import { selectDoctor, getDoctor, unselectDoctors } from 'redux/doctors'
import { updatePosition } from 'redux/search'

export const select = id => (dispatch, getState) => {
  dispatch(unselectDoctors())
  dispatch(selectDoctor(getDoctor(getState(), id)))
}

export const unselect = () => dispatch => dispatch(unselectDoctors())

export const updateMyPosition = () => (dispatch) => {
  dispatch(unselectDoctors())
  dispatch(updatePosition())
}
