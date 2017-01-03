import { connect } from 'react-redux'
import { getSelected } from 'redux/doctors'
import { getSidebarPinned } from 'redux/ui'
import { toggleSidebarPinned } from './infobar.actions'
import Component from './infobar'

const mapStateToProps = state => ({
  doctor: getSelected(state),
  pinned: getSidebarPinned(state),
})

const mapDispatchToProps = dispatch => ({
  toggleSidebarPinned: () => dispatch(toggleSidebarPinned()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
