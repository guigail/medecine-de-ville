import { connect } from 'react-redux'
import { getPosition } from 'redux/search'
import { select, unselect, updateMyPosition } from './doctors.map.actions'
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
    selectDoctor: id => dispatch(select(id)),
    unselectDoctor: id => dispatch(unselect(id)),
    updateMyPosition: () => dispatch(updateMyPosition),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
