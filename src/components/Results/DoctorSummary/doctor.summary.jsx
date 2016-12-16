import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import { List, ListItem, Tooltip, Button } from 'react-toolbox'
import { getIconByContactType } from 'redux/doctors'
import styles from './doctor.summary.style'

const DoctorSummary = ({ doctor, haveAppointment, selected, showAppointment }) => (
  <ListItem
    className={`${styles.selected} ${!selected ? styles.notSelected : ''}`}
    themes={styles}
    ripple={false}
    itemContent={
      <List ripple={false}>
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
          itemContent={
            <Button
              icon="date_range"
              label="Prendre rendez-vous"
              flat
              primary
              onClick={ () => showAppointment(doctor.id)}
            />
          }
        />
      </List>
    }
  />
)

DoctorSummary.propTypes = {
  doctor: PropTypes.object.isRequired,
  haveAppointment: PropTypes.bool,
  selected: PropTypes.bool,
  showAppointment: PropTypes.func,
}

export default loader(DoctorSummary, { wait: false })
