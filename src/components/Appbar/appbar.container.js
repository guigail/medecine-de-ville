import { connect } from 'react-redux'
import { getDrawerActive, getDrawerPinned } from 'redux/ui'
import { getSearch, isActive } from 'redux/search'
import { toggleDrawerActive } from './appbar.actions'
import Component from './appbar'

const mapStateToProps = (state) => {
  const active = getDrawerActive(state)
  const pinned = getDrawerPinned(state)
  const searchIsActive = isActive(state)

  return {
    active,
    pinned,
    searchIsActive,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawerActive: () => dispatch(toggleDrawerActive()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Component)
