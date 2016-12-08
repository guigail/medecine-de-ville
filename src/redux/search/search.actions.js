export const SET_WHERE = 'SET_WHERE'
export const SET_WHO = 'SET_WHO'
export const SET_POSITION = 'SET_POSITION'
export const RESET_POSITION = 'RESET_POSITION'

export const setWhere = (where) => {
  return {
    type: SET_WHERE,
    payload: where,
  }
}

export const setWho = (who) => {
  return {
    type: SET_WHO,
    payload: who,
  }
}

export const setPosition = (position) => {
  return {
    type: SET_POSITION,
    payload: position,
  }
}

export const resetPosition = () => {
  {
    type: RESET_POSITION
  }
}