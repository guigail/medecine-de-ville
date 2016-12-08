import { connect } from 'react-redux'
import { getPosition } from 'redux/search'
import { showOnMap, hideOnMap } from './doctors.map.actions'
import Component from './doctors.map'

const mapStateToProps = (state, { doctors }) => {
  const position = getPosition(state)
  return {
    doctors,
    position,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showOnMap: (id, isCenter) => dispatch(showOnMap(id, isCenter)),
    hideOnMap: (id) => dispatch(hideOnMap(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
