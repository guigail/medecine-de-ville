import { pick, filter, random, toLower, update } from 'lodash'
import {
  API_URL_PAGEJAUNE_PRO,
  PAGEJAUNE_API_ID,
  PAGEJAUNE_API_KEY,
  PAGEJAUNE_API_INFO_ID,
  PAGEJAUNE_API_INFO_KEY,
} from 'redux/constants'
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
    fetch(`${API_URL_PAGEJAUNE_PRO}/listings/by_merchant_id-${doctor.merchantId}.json?app_id=${PAGEJAUNE_API_INFO_ID}&app_key=${PAGEJAUNE_API_INFO_KEY}`)
      .then(raw => raw.json())
      .then(({ description, photos, categories, inscriptions, schedules }) => {
        dispatch(setDoctor({
          ...doctor,
          infoLoaded: true,
          photo: photos ? photos[0].url : '',
          description,
          categorie: categories ? categories[0].category_name : '',
          contacts: inscriptions ? inscriptions[0].contact_infos : [],
          closedDays: (schedules && schedules.opening_days) ?
            getClosedDays(schedules.opening_days) :
            [],
        }))
      })
  }
}

export const filterDoctors = () => (dispatch, getState) => {
  const filters = getFilters(getState())

  dispatch(setDoctors(
    getDoctors(getState()).map(
      d => update(d,
        'ui.visible',
        () => (filters.RAC[0] < d.RAC && d.RAC < filters.RAC[1]) && toLower(d.name).includes(toLower(filters.name)))
    )))
}

export const FETCH_DOCTORS = 'FETCH_DOCTORS'
const fetchDoctors = ({ where, what }) => (dispatch, getState) => {
  dispatch({ type: FETCH_DOCTORS })

  fetch(`${API_URL_PAGEJAUNE_PRO}/find.json?where=${where}&what=${what}&app_id=${PAGEJAUNE_API_ID}&app_key=${PAGEJAUNE_API_KEY}`)
  // Json parsing
    .then(raw => raw.json())
    // transform result
    .then(({ context: { results: { total_listing } }, ...raw }) => {
      if (total_listing > 0) {
        return raw.search_results.listings.map(
          (doctor) => {
            return {
              id: doctor.position,
              merchantId: doctor.merchant_id,
              name: doctor.merchant_name,
              address: { ...pick(doctor.inscriptions[0], 'address_street', 'address_zipcode', 'address_city') },
              geolocation: { ...pick(doctor.inscriptions[0], 'latitude', 'longitude') },
              contacts: doctor.inscriptions[0].contact_info,
              RAC: random(0, 100),
              ui: {
                selected: false,
                visible: true,
              },
            }
          })
      }
      return {}
    })
    .then((doctors) => {
      dispatch(setDoctors(doctors))
      return doctors
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
  const touchTimer = (timestamps.touch + 2000) - time
  const fetchTimer = (timestamps.fetch + 10000) - time

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
