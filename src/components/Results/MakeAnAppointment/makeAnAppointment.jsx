import React, { PropTypes } from 'react'
import moment from 'moment'
import loader from 'hoc-react-loader'
import { Dialog, DatePicker, TimePicker, CardMedia, ProgressBar } from 'react-toolbox'
import InfiniteCalendar from 'react-infinite-calendar'
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
    const today = new Date()
    const minDate = new Date()
    const maxDate = moment().add(1, 'year')
    return (
      <Dialog
        actions={this.actions}
        active={active}
        onEscKeyDown={closeDialog}
        onOverlayClick={closeDialog}
        title={`Prendre un rendez-vous avec ${doctorSelected.name}`}
      >
        <p>
          {doctorSelected.description}
        </p>
        <InfiniteCalendar
          width={'100%'}
          height={300}
          selectedDate={today}
          disabledDays={doctorSelected.closedDays}
          min={minDate}
          minDate={minDate}
          max={maxDate}
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

export default loader(MakeAnAppointment, {
  wait: ['doctorSelected'],
  LoadingIndicator: () => <ProgressBar type="circular" mode="indeterminate" multicolor />,
})
