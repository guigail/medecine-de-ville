import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import { List, ListSubHeader, ListDivider } from 'react-toolbox'
import Doctor from '../Doctor'
import DoctorSummary from '../DoctorSummary'
import styles from './doctors.list.style'

const DoctorsList = ({ doctors, who }) => (
  <List className={styles.list} selectable>
    <ListSubHeader caption={who.join(', ')} />

    {doctors.map(doctor => <div key={doctor.id}>
      <Doctor
        className={styles.doctor}
        doctor={doctor}
      />
      <DoctorSummary
        className={styles.doctor}
        doctor={doctor}
      />
    </div>)}
  </List>
)

DoctorsList.propTypes = {
  doctors: PropTypes.arrayOf(PropTypes.object).isRequired,
  who: PropTypes.arrayOf(PropTypes.string),
}

export default loader(DoctorsList, { wait: false })
