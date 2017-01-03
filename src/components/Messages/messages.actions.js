import { setMessagesActive, getMessagesActive } from 'redux/ui'

export const toggleMessagesActive = () => (dispatch, getState) =>
  dispatch(setMessagesActive(!getMessagesActive(getState())))
