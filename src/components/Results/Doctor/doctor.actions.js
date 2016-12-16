import { selectDoctor, getDoctor, unselectDoctors } from 'redux/doctors'

export const select = id => (dispatch, getState) => {
  dispatch(unselectDoctors())
  dispatch(selectDoctor(getDoctor(getState(), id)))
}
