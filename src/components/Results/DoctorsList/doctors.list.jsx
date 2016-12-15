import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import { List, ListSubHeader } from 'react-toolbox'
import Doctor from '../Doctor'
import styles from './doctors.list.style'

const DoctorsList = ({ doctors, who }) => (
  <List className={styles.list} selectable>
    <ListSubHeader caption={who.join(', ')} />
    {doctors.map(doctor =>
      <Doctor className={styles.doctor} key={doctor.id} doctor={doctor} />)}
  </List>
)

DoctorsList.propTypes = {
  doctors: PropTypes.arrayOf(PropTypes.object).isRequired,
  who: PropTypes.arrayOf(PropTypes.string),
}

export default loader(DoctorsList, { wait: false })
