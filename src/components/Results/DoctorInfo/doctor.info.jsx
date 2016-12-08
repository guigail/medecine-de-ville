import React, { PropTypes } from 'react'
import { CardMedia, List, ListItem } from 'react-toolbox'
import { getIconByContactType } from 'redux/doctors'
import loader from 'hoc-react-loader'
import MakeAnAppointment from './MakeAnAppointment'
import styles from './doctor.info.style'

const DoctorInfo = ({ doctor: { id, name, address, contacts }, ...doctor }) => (
  <div>
    <CardMedia
      theme={styles}
      aspectRatio="wide"
      image="https://placeimg.com/800/450/nature"
      contentOverlay
      color='grey'
    >
      <p>{name}</p>
    </CardMedia>
    <List ripple={false}>
      { contacts && contacts.map(({ contact_value, contact_type }, i) =>
        <ListItem
          key={i}
          caption={contact_value}
          leftIcon={getIconByContactType(contact_type)}
        />)
      }
    </List>
    <MakeAnAppointment idDoctor={id} />
  </div>
)

DoctorInfo.propTypes = {
  doctor: PropTypes.object.isRequired,
}

export default loader(DoctorInfo, { wait: ['doctor'] })
