export const SET_DOCTORS = 'SET_DOCTORS'
export const SET_DOCTOR = 'SET_DOCTOR'
export const SELECT_DOCTOR = 'SELECT_DOCTOR'
export const RESET_DOCTORS = 'RESET_DOCTORS'

export const setDoctors = (doctors) => {
  return {
    type: SET_DOCTORS,
    payload: doctors,
  }
}

export const setDoctor = (doctor) => {
  return {
    type: SET_DOCTOR,
    payload: doctor,
  }
}

export const selectDoctor = (doctor) => {
  return {
    type: SELECT_DOCTOR,
    payload: doctor,
  }
}

export const resetDoctors = () => {
  return {
    type: RESET_DOCTORS
  }
}