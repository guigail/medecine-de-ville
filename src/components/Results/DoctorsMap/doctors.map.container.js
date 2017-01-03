import { connect } from 'react-redux'
import { getPosition } from 'redux/search'
import { getVisible } from 'redux/doctors'
import { select, unselect, updateMyPosition } from './doctors.map.actions'
import Component from './doctors.map'

const mapStateToProps = state => ({
  doctors: getVisible(state),
  position: getPosition(state),
})

const mapDispatchToProps = dispatch => ({
  selectDoctor: id => dispatch(select(id)),
  unselectDoctor: id => dispatch(unselect(id)),
  updateMyPosition: () => dispatch(updateMyPosition),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
