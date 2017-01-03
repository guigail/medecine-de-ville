import { connect } from 'react-redux'
import { getDrawerActive, getDrawerPinned } from 'redux/ui'
import { isActive } from 'redux/search'
import { toggleDrawerActive } from './appbar.actions'
import Component from './appbar'

const mapStateToProps = state => ({
  active: getDrawerActive(state),
  pinned: getDrawerPinned(state),
  searchIsActive: isActive(state),
})

const mapDispatchToProps = dispatch => ({
  toggleDrawerActive: () => dispatch(toggleDrawerActive()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
