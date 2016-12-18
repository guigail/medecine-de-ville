import React, { PropTypes } from 'react'
import { Dialog, DatePicker, TimePicker, CardMedia } from 'react-toolbox'
import styles from './makeAnAppointment.style'

class MakeAnAppointment extends React.Component {

  constructor(props) {
    super(props)

    const { doctorSelected, closeDialog, makeAnAppointment } = this.props

    this.state = {
      date: new Date(),
      time: new Date(),
    }

    this.actions = [
      { label: 'Annuler', onClick: closeDialog },
      {
        label: 'Prendre rendez-vous',
        primary: true,
        onClick: () => makeAnAppointment(doctorSelected.id, this.state.date, this.state.time),
      },
    ]
  }

  render() {
    const { doctorSelected, active, closeDialog } = this.props
    return (
      <Dialog
        actions={this.actions}
        active={active}
        onEscKeyDown={closeDialog}
        onOverlayClick={closeDialog}
        title="Prendre un rendez-vous"
      >
        <CardMedia
          aspectRatio="wide"
          image={doctorSelected.photo}
        />
        <DatePicker
          label="Quel jour ?"
          locale="fr"
          autoOk
          onChange={date => this.state.date.setDate(date.getDate())}
          value={this.state.date}
        />
        <TimePicker label="Quelle heure ?" onChange={time => this.state.date.setTime(time)} value={this.state.date}/>
      </Dialog>)
  }
}

MakeAnAppointment.propTypes = {
  doctorSelected: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  makeAnAppointment: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
}

export default MakeAnAppointment
