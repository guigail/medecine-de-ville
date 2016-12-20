import React, { PropTypes } from 'react'
import { CardTitle } from 'react-toolbox'
import loader from 'hoc-react-loader'
import { ProgressBar } from 'react-google-maps'
import GoogleMap from './GoogleMap'
import styles from './doctors.map.style'
import AvatarDoctor from '../../UI/AvatarDoctor'

const infoContent = (name, address, photo, RAC) =>
  <div className={styles.info}><AvatarDoctor name={name} photo={photo} /><h1>{name}</h1><h2>{RAC} €</h2></div>

class DoctorsMap extends React.Component {
  constructor(props) {
    super(props)
    this.props.updateMyPosition()
  }

  render() {
    const { className, doctors, position, selectDoctor, unselectDoctor } = this.props
    return (
      <div className={className}>
        <GoogleMap
          containerElement={<div style={{height: '100%'}}/>}
          mapElement={<div style={{height: '100%'}}/>}

          position={position}

          markers={doctors.length > 0 ?
        doctors.map(({ geolocation: { latitude, longitude }, id, name, photo, RAC, address: { address_street }, ui: { selected, visible } }) => {
          return {
            id,
            position: new google.maps.LatLng(latitude, longitude),
            showInfo: selected,
            infoContent: infoContent(name, address_street, photo, RAC),
          }
        }) : []}

          onMarkerClick={selectDoctor}
          onMarkerClose={unselectDoctor}
        />
      </div>
    )
  }
}

DoctorsMap.propTypes = {
  className: PropTypes.string,
  doctors: PropTypes.arrayOf(PropTypes.object).isRequired,
  position: PropTypes.object.isRequired,
  selectDoctor: PropTypes.func,
  unselectDoctor: PropTypes.func,
  updateMyPosition: PropTypes.func,
}


export default loader(DoctorsMap, {
  wait: ['doctors'],
  LoadingIndicator: () => <ProgressBar type="circular" mode="indeterminate" multicolor />,
})
