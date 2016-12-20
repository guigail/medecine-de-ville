import { PUSH } from 'redux-little-router'
import { setWhere, setWhat, updatePosition } from 'redux/search'
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

export const changeWhat = what => (dispatch) => {
  dispatch(setWhat([what]))
  dispatch(lazyFetchDoctors())
}

export const updateMyPosition = () => (dispatch) => {
  dispatch(unselectDoctors())
  dispatch(updatePosition())
}
