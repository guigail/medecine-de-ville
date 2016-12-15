import { setDoctors, getDoctors, setDoctor, getDoctor } from 'redux/doctors'

export const showOnMap = (id, isCenter) => (dispatch, getState) => {
  dispatch(setDoctors(getDoctors(getState()).map((doctor) => {
    return doctor.id === id ? { ...doctor, showOnMap: true } : { ...doctor, showOnMap: false }
  })))
}

export const hideOnMap = id => (dispatch, getState) => dispatch(setDoctor({
  ...getDoctor(getState(), id),
  showOnMap: false,
}))
