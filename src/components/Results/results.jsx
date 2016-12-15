import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import { ProgressBar } from 'react-google-maps'
import DoctorsList from './DoctorsList'
import DoctorsMap from './DoctorsMap'
import Filters from './Filters'
import styles from './results.style'

const Results = ({ doctors }) => {
  let component = <h1 />
  if (doctors.length > 0) {
    component = (
      <div className={styles.results}>
        <div className={styles.doctors_list}>
          <Filters />
          <DoctorsList doctors={doctors} />
        </div>
        <div className={styles.doctors_map}>
          <DoctorsMap doctors={doctors} />
        </div>
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
