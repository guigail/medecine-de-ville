import { connect } from 'react-redux'
import { getDoctors } from 'redux/doctors'
import { getSearch } from 'redux/search'
import { toggleSidebarPinned } from '../Infobar/infobar.actions'
import Component from './results'

const mapStateToProps = (state) => {
  const search = getSearch(state)
  const doctors = getDoctors(state)

  return {
    doctors,
    search,
    position: state.position,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSidebarPinned: () => dispatch(toggleSidebarPinned()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Component)
