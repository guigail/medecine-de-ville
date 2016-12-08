import { connect } from 'react-redux'
import { getDoctors } from 'redux/doctors'
import { getDrawerActive, getDrawerPinned } from '../../redux/ui'
import { toggleDrawerActive, toggleDrawerPinned } from './menu.actions'
import Component from './menu'

const mapStateToProps = (state) => {
  const active = getDrawerActive(state)
  const pinned = getDrawerPinned(state)

  return {
    active,
    pinned,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawerActive: () => dispatch(toggleDrawerActive()),
    toggleDrawerPinned: () => dispatch(toggleDrawerPinned()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Component)
