import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import { ProgressBar } from 'react-toolbox'
import DoctorsList from './DoctorsList'
import DoctorsMap from './DoctorsMap'
import MakeAnAppointment from './MakeAnAppointment'
import Filters from './Filters'
import styles from './results.style'
import Messages from '../Messages'

const Results = ({ doctors, searchIsActive }) => {
  let component = <h1></h1>
  if (searchIsActive) {
    component = (
      <div className={styles.results}>
        <div className={styles.doctors_list}>
          <Filters />
          {doctors.length > 0 ?
            <DoctorsList /> :
            <h1>Aucun résultat</h1>
          }
        </div>
        <div className={styles.doctors_map}>
          <DoctorsMap />
        </div>
        <MakeAnAppointment />
        <Messages />
      </div>
    )
  }
  return component
}

Results.propTypes = {
  doctors: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default loader(Results, {
  wait: ['doctors'],
  LoadingIndicator: () => <ProgressBar type="circular" mode="indeterminate" multicolor />,
})
