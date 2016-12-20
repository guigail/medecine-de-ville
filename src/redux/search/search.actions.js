export const SET_WHERE = 'SET_WHERE'
export const setWhere = where => ({ type: SET_WHERE, payload: where })

export const SET_WHO = 'SET_WHO'
export const setWhat = what => ({ type: SET_WHO, payload: what })

export const SET_POSITION = 'SET_POSITION'
export const setPosition = position => ({ type: SET_POSITION, payload: position })

export const RESET_POSITION = 'RESET_POSITION'
export const resetPosition = () => ({ type: RESET_POSITION })


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
      dispatch(setPosition({ lat: position.coords.latitude, lng: position.coords.longitude }))
    },
    (reason) => {
      dispatch(resetPosition())
    })
}