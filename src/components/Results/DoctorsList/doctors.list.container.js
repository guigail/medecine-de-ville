import { connect } from 'react-redux'
import { getVisible } from 'redux/doctors'
import { getWhat } from 'redux/search'
import Component from './doctors.list'

const mapStateToProps = state => ({
  doctors: getVisible(state),
  what: getWhat(state),
})

export default connect(mapStateToProps)(Component)
