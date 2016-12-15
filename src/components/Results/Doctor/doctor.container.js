import { connect } from 'react-redux'
import { getAppointmentByDoctor } from 'redux/appointments'
import Component from './doctor'
import { showOnMap, hideOnMap } from '../DoctorsMap/doctors.map.actions'
import { showInfo } from './doctor.actions'


const mapStateToProps = (state, { doctor: { id, ...doctor } }) => {
  const appointment = getAppointmentByDoctor(state, id)

  return {
    id,
    doctor,
    haveAppointment: appointment ? true : false,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showOnMap: (id, center) => dispatch(showOnMap(id, center)),
    showInfo: id => dispatch(showInfo(id)),
    hideOnMap: id => dispatch(hideOnMap(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
