import React, { PropTypes } from 'react'
import { Snackbar } from 'react-toolbox'

class Messages extends React.Component {
  constructor(props) {
    super(props)
    this.toggleMessagesActive = this.props.toggleMessagesActive.bind(this)
  }

  state = { active: false }

  toggleMessagesActive() {
    this.state.active = !this.state.active
  }

  render() {
    return (
      <Snackbar
        action="Annuler"
        active={this.state.active}
        label="Réservation effectuée"
        timeout={2000}
        onTimeout={this.toggleMessagesActive()}
        type="accept"
      />
    )
  }

}

Messages.propTypes = {
  toggleMessagesActive: PropTypes.func.isRequired,
}

export default Messages
