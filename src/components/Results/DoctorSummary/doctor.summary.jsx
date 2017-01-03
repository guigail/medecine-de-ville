import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import { List, ListItem, Button } from 'react-toolbox'
import { getIconByContactType } from 'redux/doctors'
import styles from './doctor.summary.style'

const DoctorSummary = ({ doctor, appointment, selected, showAppointment }) => (
  <ListItem
    className={`${styles.selected} ${!selected ? styles.notSelected : ''}`}
    themes={styles}
    ripple={false}
    itemContent={
      <List ripple={false}>
        <ListItem
          key="categorie"
          ripple={false}
          caption={doctor.categorie}
          leftIcon="person"
        />
        { doctor.contacts && doctor.contacts.map(({ contact_value, contact_type }, i) =>
          <ListItem
            key={i}
            ripple={false}
            caption={contact_value}
            leftIcon={getIconByContactType(contact_type)}
          />)
        }
        <ListItem
          key="makeAnAppointment"
          ripple={false}
          itemContent={!appointment ?
            <Button
              icon="date_range"
              label="Prendre rendez-vous"
              flat
              primary
              onClick={() => showAppointment()}
            /> :
            <h2>Rendez vous le {appointment.date.format('DD/MM/YYYY')} à {appointment.date.format('HH:mm')}</h2>
          }
        />
      </List>
    }
  />
)

DoctorSummary.propTypes = {
  doctor: PropTypes.object.isRequired,
  appointment: PropTypes.object,
  selected: PropTypes.bool,
  showAppointment: PropTypes.func,
}

export default loader(DoctorSummary, { wait: false })
