import {PUSH} from 'redux-little-router'
import {setWhere, setWho, setPosition, resetPosition, getSearch} from 'redux/search'
import {lazyFetchDoctors, resetDoctors, unselectDoctors} from 'redux/doctors'
import {getTitle} from 'redux/router'
import {API_URL_PAGEJAUNE_PRO, PAGEJAUNE_API_ID, PAGEJAUNE_API_KEY} from 'redux/constants'

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
)

export const updatePosition = () => (dispatch) => {
    geolocation.getCurrentPosition(
        (position) => {
            dispatch(unselectDoctors())
            dispatch(setPosition({lat: position.coords.latitude, lng: position.coords.longitude}))
        },
        (reason) => {
            dispatch(resetPosition())
        })
}