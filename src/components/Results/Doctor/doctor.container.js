import { connect } from 'react-redux'
import Component from './doctor'
import { showOnMap, hideOnMap } from '../DoctorsMap/doctors.map.actions'
import { showInfo } from './doctor.actions'
import { getAppointmentByDoctor } from 'redux/appointments'

const mapStateToProps = (state, { doctor: { id, lastOne, ...doctor } }) => {

  const appointment = getAppointmentByDoctor(state, id)

  return {
    id: id,
    doctor: doctor,
    lastOne: lastOne,
    haveAppointment: appointment ? true : false,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showOnMap: (id, center) => dispatch(showOnMap(id, center)),
    showInfo: (id) => dispatch(showInfo(id)),
    hideOnMap: (id) => dispatch(hideOnMap(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
