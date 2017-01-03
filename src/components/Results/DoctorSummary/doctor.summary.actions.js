import { setDialogActive } from 'redux/ui'

export const showAppointment = () => dispatch =>
  dispatch(setDialogActive(true))
