import { result } from 'lodash'
import { connect } from 'react-redux'
import { getAppointmentByDoctor } from 'redux/appointments'
import Component from './doctor.summary'
import { showAppointment } from './doctor.summary.actions'


const mapStateToProps = (state, { doctor: { merchantId, ...doctor } }) => {
  const appointment = getAppointmentByDoctor(state, merchantId)
  const selected = result(doctor, 'ui.selected')
  return {
    doctor,
    selected,
    appointment,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showAppointment: () => dispatch(showAppointment()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
