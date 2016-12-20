import { selectDoctor, getDoctor, unselectDoctors, fetchDoctorInfo } from 'redux/doctors'

export const select = id => (dispatch, getState) => {
  dispatch(unselectDoctors())
  dispatch(selectDoctor(getDoctor(getState(), id)))
  dispatch(fetchDoctorInfo(getDoctor(getState(), id)))
}
