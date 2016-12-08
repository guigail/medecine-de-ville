import React, { PropTypes } from 'react'
import { DatePicker, TimePicker, Button, ListItem, ListSubHeader, ListDivider } from 'react-toolbox'
import styles from './makeAnAppointment.style'

class MakeAnAppointment extends React.Component {
  state = {
    date: new Date(),
    time: new Date(),
  }

  render() {
    const { appointment, idDoctor, makeAnAppointment, cancelAnAppointment } = this.props

    if (!appointment) {
      return (<div className={styles.makeAnAppointment}>
        <ListDivider />
        <ListSubHeader caption={'Prendre rendez-vous'}/>
        <ListItem
          ripple={false}
          itemContent={<DatePicker label="Quel jour ?" locale="fr" autoOk onChange={date => this.state.date.setDate(date.getDate())} value={this.state.date} />}
        />
        <ListItem
          ripple={false}
          itemContent={<TimePicker label="Quelle heure ?" onChange={time => this.state.date.setTime(time)} value={this.state.date} />}
        />
        <ListItem
          ripple={false}
          itemContent={<Button className={styles.send} label="Envoyez la demande" primary onClick={() => makeAnAppointment(idDoctor, this.state.date, this.state.time)} />}
        />
      </div>)
    }
    return (<div>
      <ListDivider />
      <ListSubHeader caption={`Rendez vous le ${appointment.date.toLocaleString('fr-FR')}`} />
      <ListItem
        ripple={false}
        leftIcon={<Button label="Modifier" flat primary />}
        rightIcon={<Button label="Annuler" accent onClick={() => cancelAnAppointment(appointment)} />}
      />

    </div>)

  }
}

MakeAnAppointment.propTypes = {
  appointment: PropTypes.object,
  idDoctor: PropTypes.number.isRequired,
}

export default MakeAnAppointment
