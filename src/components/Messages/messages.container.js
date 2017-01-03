import { connect } from 'react-redux'
import { getMessagesActive } from 'redux/ui'
import { toggleMessagesActive } from './messages.actions'
import Component from './messages'

const mapStateToProps = state => ({
  active: getMessagesActive(state),
})

const mapDispatchToProps = dispatch => ({
  toggleMessagesActive: () => dispatch(toggleMessagesActive()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
