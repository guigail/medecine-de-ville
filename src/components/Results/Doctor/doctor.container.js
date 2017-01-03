import { connect } from 'react-redux'
import { result } from 'lodash'
import Component from './doctor'
import { select } from './doctor.actions'


const mapStateToProps = (state, { doctor: { id, ...doctor } }) => ({
  id,
  doctor,
  selected: result(doctor, 'ui.selected'),
})

const mapDispatchToProps = dispatch => ({
  selectDoctor: id => dispatch(select(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
