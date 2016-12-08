import { connect } from 'react-redux'
import { getDrawerActive, getDrawerPinned } from 'redux/ui'
import { getSearch } from 'redux/search'
import { toggleDrawerActive } from './appbar.actions'
import Component from './appbar'

const mapStateToProps = (state) => {
  const active = getDrawerActive(state)
  const pinned = getDrawerPinned(state)
  const search = getSearch(state)

  return {
    active,
    pinned,
    search,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawerActive: () => dispatch(toggleDrawerActive()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Component)
