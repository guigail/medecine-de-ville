import { connect } from 'react-redux'
import { getDoctor, getSelected } from 'redux/doctors'
import { getSidebarPinned } from 'redux/ui'
import { toggleSidebarPinned } from './infobar.actions'
import Component from './infobar'

const mapStateToProps = (state) => {
  const pinned = getSidebarPinned(state)
  const doctor = getSelected(state)

  return {
    doctor,
    pinned,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSidebarPinned: () => dispatch(toggleSidebarPinned()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Component)
