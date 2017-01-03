import { connect } from 'react-redux'
import { getDoctors } from 'redux/doctors'
import { isActive } from 'redux/search'
import { toggleSidebarPinned } from '../Infobar/infobar.actions'
import Component from './results'

const mapStateToProps = state => ({
  doctors: getDoctors(state),
  position: state.position,
  searchIsActive: isActive(state),
})

const mapDispatchToProps = dispatch => ({
  toggleSidebarPinned: () => dispatch(toggleSidebarPinned()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
