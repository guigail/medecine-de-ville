import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import DoctorsList from './DoctorsList'
import DoctorsMap from './DoctorsMap'
import styles from './results.style'

const Results = ({ doctors }) => {
  let component = <h1></h1>
  if (doctors.length > 0) {
    component = (
      <div className={styles.results}>
        <div className={styles.doctors_list}>
          <DoctorsList doctors={doctors} />
        </div>
        <div className={styles.doctors_map}>
          <DoctorsMap doctors={doctors}></DoctorsMap>
        </div>
      </div>
    )
  }
  return component
}

Results.propTypes = {
  doctors: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default loader(Results, { wait: false })
