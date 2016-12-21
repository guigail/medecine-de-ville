import React, { PropTypes } from 'react'
import moment from 'moment'
import loader from 'hoc-react-loader'
import { Dialog, DatePicker, TimePicker, CardMedia, ProgressBar } from 'react-toolbox'
import InfiniteCalendar from 'react-infinite-calendar'
import styles from './makeAnAppointment.style'

const locale = {
  name: 'fr',
  headerFormat: 'dddd, Do MMM',
  months: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"],
  monthsShort: ["Janv", "Fevr", "Mars", "Avr", "Mai", "Juin", "Juil", "Aout", "Sept", "Oct", "Nov", "Dec"],
  weekdays: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
  weekdaysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
  blank: 'Aucune date selectionnee',
  todayLabel: {
    long: 'Aujourd\'hui',
    short: 'Auj.'
  }
}

class MakeAnAppointment extends React.Component {

  constructor(props) {
    super(props)

    const { closeDialog, makeAnAppointment } = this.props
    this.state = {
      date: moment(),
      time: new Date(),
    }

    this.actions = [
      { label: 'Annuler', onClick: closeDialog },
      {
        label: 'Prendre rendez-vous',
        primary: true,
        onClick: () => makeAnAppointment(this.state.date),
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
        title={`Prendre un rendez-vous avec ${doctorSelected.name}`}
      >
        <p>
          {doctorSelected.description}
        </p>
        <InfiniteCalendar
          width={'100%'}
          height={300}
          selectedDate={moment()}
          disabledDays={doctorSelected.closedDays}
          min={moment()}
          minDate={moment()}
          max={moment().add(1, 'year')}
          locale={locale}
          keyboardSupport={true}
          showHeader={false}
          onSelect={(date) => {
            this.state.date.day(date.day())
            this.state.date.month(date.month())
            this.state.date.year(date.year())
          }}
        />
        <TimePicker
          theme={styles}
          label="Quelle heure ?"
          value={this.state.time}
          onChange={(time) => {
            this.state.time.setTime(time)
            this.state.date.hours(time.getHours())
            this.state.date.minutes(time.getMinutes())
          }}
        />
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
  LoadingIndicator: () => <ProgressBar type="circular" mode="indeterminate" multicolor/>,
})
