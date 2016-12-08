import { connect } from 'react-redux'
import Component from './doctor'
import { showOnMap, hideOnMap } from '../DoctorsMap/doctors.map.actions'
import { showInfo } from './doctor.actions'

const mapStateToProps = (state, { doctor: { id, lastOne, ...doctor } }) => {
  return {
    id,
    doctor,
    lastOne,
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
