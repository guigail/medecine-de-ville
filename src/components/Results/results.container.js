import { connect } from 'react-redux'
import { getDoctors } from 'redux/doctors'
import { getSearch, isActive } from 'redux/search'
import { toggleSidebarPinned } from '../Infobar/infobar.actions'
import Component from './results'

const mapStateToProps = (state) => {
  const doctors = getDoctors(state)
  const searchIsActive = isActive(state)

  return {
    doctors,
    position: state.position,
    searchIsActive,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSidebarPinned: () => dispatch(toggleSidebarPinned()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Component)
