import { connect } from 'react-redux'
import { getMessagesActive } from 'redux/ui'
import { toggleMessagesActive } from './messages.actions'
import Component from './messages'

const mapStateToProps = (state) => {
  const active = getMessagesActive(state)
  console.log(active)
  return {
    active,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMessagesActive: () => dispatch(toggleMessagesActive()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Component)
