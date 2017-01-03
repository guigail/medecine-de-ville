import { connect } from 'react-redux'
import { getDrawerActive, getDrawerPinned } from '../../redux/ui'
import { toggleDrawerActive, toggleDrawerPinned } from './menu.actions'
import Component from './menu'

const mapStateToProps = state => ({
  active: getDrawerActive(state),
  pinned: getDrawerPinned(state),
})

const mapDispatchToProps = dispatch => ({
  toggleDrawerActive: () => dispatch(toggleDrawerActive()),
  toggleDrawerPinned: () => dispatch(toggleDrawerPinned()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
