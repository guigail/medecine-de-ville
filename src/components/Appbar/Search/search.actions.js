import { PUSH } from 'redux-little-router'
import { setWhere, setWho, setPosition, resetPosition, getSearch } from 'redux/search'
import { setDoctors, resetDoctors } from 'redux/doctors'
import { getTitle } from 'redux/router'
import pick from 'lodash/pick'
import { API_URL_PAGEJAUNE_PRO, PAGEJAUNE_API_ID, PAGEJAUNE_API_KEY } from 'redux/constants'

export const fetchDoctors = ({ where, who }) => (dispatch) => {
  if (where !== '' && who !== '') {
    fetch(`${API_URL_PAGEJAUNE_PRO}/find.json?where=${where}&what=${who}&app_id=${PAGEJAUNE_API_ID}&app_key=${PAGEJAUNE_API_KEY}`)
      .then(raw => raw.json())
      .then(({ search_results: { listings: doctors } }) => {
        dispatch(setDoctors(doctors.map(
          (doctor) => {
            return {
              id: doctor.position,
              name: doctor.merchant_name,
              address: { ...pick(doctor.inscriptions[0], 'address_street', 'address_zipcode', 'address_city') },
              geolocation: { ...pick(doctor.inscriptions[0], 'latitude', 'longitude') },
              contacts: doctor.inscriptions[0].contact_info,
              showOnMap: false,
              selected: false,
            }
          }))
        )
      })
  } else {
    dispatch(resetDoctors())
  }
}

export const search = () => (dispatch, getState) => {
  dispatch(fetchDoctors(getSearch(getState())))

  const title = getTitle(getState())
  if (title !== 'HOME') {
    dispatch({
      type: PUSH,
      payload: '/',
    })
  }
}

export const changeWhere = where => (dispatch) => {
  dispatch(setWhere(where))
  dispatch(search())
}

export const changeWho = who => (dispatch) => {
  dispatch(setWho([who]))
  dispatch(search())
}

const geolocation = (
  navigator.geolocation ?
    navigator.geolocation :
    ({
      getCurrentPosition(success, failure) {
        failure("Your browser doesn't support geolocation.")
      },
    })
);

export const updatePosition = () => (dispatch) => {
  geolocation.getCurrentPosition(
    (position) => {
      dispatch(setPosition({ lat: position.coords.latitude, lng: position.coords.longitude }))
    },
    (reason) => {
      dispatch(resetPosition())
    })
}