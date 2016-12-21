import { setMessagesActive, getMessagesActive } from 'redux/ui'

export const toggleMessagesActive = () => (dispatch, getState) => {
  console.log("timeout")
  dispatch(setMessagesActive(!getMessagesActive(getState())))
}
