import { toLower, update } from 'lodash'
import { API_URL_PAGEJAUNE, API_URL_PAGEJAUNE_FIND } from 'redux/constants'
import { getSearch } from 'redux/search'
import { getClosedDays, getDoctors } from 'redux/doctors'
import { getTimestamps } from 'redux/ui'
import { getFilters } from 'redux/filters'

export const SET_DOCTOR = 'SET_DOCTOR'
export const setDoctor = doctor => ({ type: SET_DOCTOR, payload: doctor })

export const SELECT_DOCTOR = 'SELECT_DOCTOR'
export const selectDoctor = doctor => ({ type: SELECT_DOCTOR, payload: doctor })

export const UNSELECT_DOCTORS = 'UNSELECT_DOCTORS'
export const unselectDoctors = () => ({ type: UNSELECT_DOCTORS })

export const RESET_DOCTORS = 'RESET_DOCTORS'
export const resetDoctors = () => ({ type: RESET_DOCTORS })

export const SET_DOCTORS = 'SET_DOCTORS'
export const setDoctors = doctors => ({ type: SET_DOCTORS, payload: doctors })

export const fetchDoctorInfo = doctor => (dispatch) => {
  if (doctor.merchantId && !doctor.infoLoaded) {
    fetch(`${API_URL_PAGEJAUNE}/${doctor.merchantId}`)
      .then(response => response.json())
      .then(doctorInfo => dispatch(setDoctor({ ...doctorInfo, infoLoaded: true })))
  }
}

export const filterDoctors = () => (dispatch, getState) => {
  const filters = getFilters(getState())

  dispatch(setDoctors(
    getDoctors(getState()).map(
      d => update(d,
        'ui.visible',
        () => {
          const allPrice = d.rac != null ? d.rac : (d.price != null ? d.price : '23')
          return (filters.RAC[0] < allPrice && allPrice < filters.RAC[1])
            && toLower(d.name).includes(toLower(filters.name))
        }
      ))))
}

export const FETCH_DOCTORS = 'FETCH_DOCTORS'
const fetchDoctors = ({ where, what }) => (dispatch) => {
  dispatch({ type: FETCH_DOCTORS })

  fetch(`${API_URL_PAGEJAUNE_FIND}?where=${where}&what=${what}&info=true&maxByPage=30`)
  // Json parsing
    .then(response => response.json())
    // transform result
    .then((doctors) => {
      if (doctors.length > 0) {
        // add ui value for all doctors
        dispatch(setDoctors(doctors.map((doctor) => {
          return {
            ...doctor,
            ui: {
              selected: false,
              visible: true,
            },
          }
        })))
      } else {
        dispatch(resetDoctors)
      }
    })
}

let timeout
export const lazyFetchDoctors = () => (dispatch, getState) => {
  // Cancel previous timeout
  if (timeout) clearTimeout(timeout)
  const timestamps = getTimestamps(getState())
  const search = getSearch(getState())

  if (search.where === '' || search.what === '') {
    dispatch(resetDoctors())
    return
  }

  // Doctors are never getting fetched : don't wait
  if (!timestamps.fetch) {
    dispatch(fetchDoctors(search))
    return
  }

  const time = (new Date().getTime())
  const touchTimer = (timestamps.touch + 1000) - time
  const fetchTimer = (timestamps.fetch + 1000) - time

  // Research if user didn't write for 0.5s or last search was 1s ago
  if (touchTimer <= 0 || fetchTimer <= 0) {
    dispatch(fetchDoctors(search))
  }

  // Wait for the tinier timer (if needed)

  if (touchTimer > 0) {
    const timer = Math.min(
      (touchTimer > 0 ? touchTimer : 10000),
      (fetchTimer > 0 ? fetchTimer : 10000)
    )
    timeout = setTimeout(
      () => dispatch(lazyFetchDoctors()),
      timer
    )
  }
}
