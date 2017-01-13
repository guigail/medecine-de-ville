import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import { ListItem, ProgressBar } from 'react-toolbox'
import AvatarDoctor from '../../UI/AvatarDoctor'
import styles from './doctor.style'

const Doctor = ({ id, doctor, selected, selectDoctor }) => (
  <ListItem
    className={selected ? styles.selected : styles.notSelected}
    themes={styles}
    selectable
    caption={doctor.name}
    itemContent={
      <div className={styles.doctor}>
        <AvatarDoctor {...doctor} />
        <h1>{doctor.name}</h1>
        <h2>{`${doctor.price ? doctor.price : '23'} €`}</h2>
      </div>
    }
    onClick={() => { selectDoctor(id) }}
  />
)

Doctor.propTypes = {
  id: PropTypes.string.isRequired,
  doctor: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  selectDoctor: PropTypes.func,
}

export default loader(Doctor, {
  wait: ['doctor'],
  LoadingIndicator: () => <ProgressBar type="circular" mode="indeterminate" multicolor />,
})
