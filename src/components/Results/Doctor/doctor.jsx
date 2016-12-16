import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import { ListItem, CardTitle } from 'react-toolbox'
import styles from './doctor.style'

const Doctor = ({ id, doctor, selected, selectDoctor }) => (
  <ListItem
    className={selected ? styles.selected : styles.notSelected}
    themes={styles}
    selectable
    caption={doctor.name}
    legend={`${doctor.address.address_street} - RAC [${doctor.RAC}]`}
    itemContent={
      <CardTitle
        avatar={doctor.photo}
        title={doctor.name}
        subtitle={`${doctor.address.address_street} - RAC [${doctor.RAC}]`}
      />
    }
    onClick={() => { selectDoctor(id) }}
  />
)

Doctor.propTypes = {
  id: PropTypes.number.isRequired,
  doctor: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  selectDoctor: PropTypes.func,
}

export default loader(Doctor, { wait: false })
