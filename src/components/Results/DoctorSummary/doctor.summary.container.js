import { connect } from 'react-redux'
import { result } from 'lodash'
import { getAppointmentByDoctor } from 'redux/appointments'
import Component from './doctor.summary'
import { showAppointment } from './doctor.summary.actions'

const mapStateToProps = (state, { doctor: { merchantId, ...doctor } }) => ({
  doctor,
  selected: result(doctor, 'ui.selected'),
  appointment: getAppointmentByDoctor(state, merchantId),
})

const mapDispatchToProps = dispatch => ({
  showAppointment: () => dispatch(showAppointment()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
