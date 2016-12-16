import {
  API_URL_PAGEJAUNE_PRO,
  PAGEJAUNE_API_ID,
  PAGEJAUNE_API_KEY,
  PAGEJAUNE_API_INFO_ID,
  PAGEJAUNE_API_INFO_KEY
} from 'redux/constants'
import { pick, filter, random, toLower } from 'lodash'
import { getSearch } from 'redux/search'
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

export const FETCH_DOCTORS = 'FETCH_DOCTORS'
const fetchDoctors = ({ where, who }) => (dispatch, getState) => {
  dispatch({ type: FETCH_DOCTORS, timestamp: (new Date().getTime()) })

  const filters = getFilters(getState())

  fetch(`${API_URL_PAGEJAUNE_PRO}/find.json?where=${where}&what=${who}&app_id=${PAGEJAUNE_API_ID}&app_key=${PAGEJAUNE_API_KEY}`)
  // Json parsing
    .then(raw => raw.json())
    // transform result
    .then(({ context: { results: { total_listing } }, ...raw }) => {
      if (total_listing > 0) {
        return raw.search_results.listings.map(
          (doctor) => {
            return {
              id: doctor.position,
              name: doctor.merchant_name,
              address: { ...pick(doctor.inscriptions[0], 'address_street', 'address_zipcode', 'address_city') },
              geolocation: { ...pick(doctor.inscriptions[0], 'latitude', 'longitude') },
              contacts: doctor.inscriptions[0].contact_info,
              RAC: random(0, 100),
              ui: {
                selected: false,
              },
            }
          })
      }
      return {}
    })
    // apply filters
    .then(doctors => filter(doctors, d => (
      (filters.RAC[0] < d.RAC && d.RAC < filters.RAC[1]) &&
      toLower(d.name).includes(toLower(filters.name))
    )))
    .then((doctors) => {
      dispatch(setDoctors(doctors))
      return doctors
    })
    .then((doctors) => {
      doctors.map(doctor =>
        fetch(`${API_URL_PAGEJAUNE_PRO}/listings/by_mercant_id-01.json?app_id=${PAGEJAUNE_API_INFO_ID}&app_key=${PAGEJAUNE_API_INFO_KEY}`)
          .then(raw => raw.json())
          .then(({ photos }) => {
            doctor.photo = photos[0].url
            dispatch(setDoctor(doctor))
          })
      )
    })
}

let timeout
export const lazyFetchDoctors = () => (dispatch, getState) => {
  // Cancel previous timeout
  if (timeout) clearTimeout(timeout)

  const timestamps = getTimestamps(getState())
  const search = getSearch(getState())

  if (search.where === '' || search.who === '') {
    dispatch(resetDoctors())
    return
  }

  // TVShows are never getting fetched : don't wait
  if (!timestamps.FETCH_DOCTORS) {
    dispatch(fetchDoctors(search))
    return
  }

  const time = (new Date().getTime())
  const typeTimer = (timestamps.SET_SEARCH + 200) - time
  const fetchTimer = (timestamps.FETCH_TVSHOWS + 1000) - time

  // Research if user didn't write for 0.5s or last search was 1s ago
  if (typeTimer <= 0 || fetchTimer <= 0) {
    dispatch(fetchDoctors(search))
  }

  // Wait for the tinier timer (if needed)
  if (typeTimer > 0) {
    const timer = Math.min(
      (typeTimer > 0 ? typeTimer : 10000),
      (fetchTimer > 0 ? fetchTimer : 10000)
    )
    timeout = setTimeout(
      () => dispatch(lazyFetchDoctors()),
      timer
    )
  }
}
