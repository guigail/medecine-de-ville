import { PUSH } from 'redux-little-router'
import { setWhere, setWho, setPosition, resetPosition, updatePosition } from 'redux/search'
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

export const updateMyPosition = () => dispatch => {
  dispatch(unselectDoctors())
  dispatch(updatePosition())
}
