import React, { PropTypes } from 'react'
import { Snackbar } from 'react-toolbox'

const Messages = ({ active, toggleMessagesActive }) => (
  <Snackbar
    action="Annuler"
    active={active}
    label="Réservation effectuée"
    timeout={2000}
    onTimeout={toggleMessagesActive()}
    type="accept"
  />
)

Messages.propTypes = {
  active: PropTypes.bool.isRequired,
  toggleMessagesActive: PropTypes.func.isRequired,
}

export default Messages
