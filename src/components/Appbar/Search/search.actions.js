import { PUSH } from 'redux-little-router'
import { setWhere, setWho, setPosition, resetPosition } from 'redux/search'
import { lazyFetchDoctors, unselectDoctors } from 'redux/doctors'
import { getTitle } from 'redux/router'

export const search = () => (dispatch, getState) => {
  dispatch(lazyFetchDoctors())

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
  dispatch(lazyFetchDoctors())
}

export const changeWho = who => (dispatch) => {
  dispatch(setWho([who]))
  dispatch(lazyFetchDoctors())
}

const geolocation = (
  navigator.geolocation ?
    navigator.geolocation :
    ({
      getCurrentPosition(success, failure) {
        failure("Your browser doesn't support geolocation.")
      },
    })
)

export const updatePosition = () => (dispatch) => {
  geolocation.getCurrentPosition(
    (position) => {
      dispatch(unselectDoctors())
      dispatch(setPosition({ lat: position.coords.latitude, lng: position.coords.longitude }))
    },
    (reason) => {
      dispatch(resetPosition())
    })
}