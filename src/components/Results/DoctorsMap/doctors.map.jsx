import React, { PropTypes } from 'react'
import { CardTitle } from 'react-toolbox'
import loader from 'hoc-react-loader'
import GoogleMap from './GoogleMap'
import styles from './doctors.map.style'

const infoContent = (name, address) =>
  <CardTitle
    theme={styles}
    avatar="https://placeimg.com/80/80/animals"
    title={name}
    subtitle={address}
  />

const DoctorsMap = ({ className, doctors, position, showOnMap, hideOnMap }) => (
  <div className={className}>
    <GoogleMap
      containerElement={<div style={{ height: '100%' }} />}
      mapElement={<div style={{ height: '100%' }} />}

      position={position}

      markers={
        doctors.length > 0 ?
          doctors.map(({ geolocation: { latitude, longitude }, id, name, address: { address_street }, showOnMap, selected }) => {
            return {
              id,
              position: new google.maps.LatLng(latitude, longitude),
              showInfo: showOnMap,
              infoContent: infoContent(name, address_street),
              selected,
            }
          }) : []
      }

      onMarkerClick={showOnMap}
      onMarkerClose={hideOnMap}
    />
  </div>
)

DoctorsMap.propTypes = {
  className: PropTypes.string,
  doctors: PropTypes.arrayOf(PropTypes.object).isRequired,
  position: PropTypes.object.isRequired,
  showOnMap: PropTypes.function.isRequired,
  hideOnMap: PropTypes.function.isRequired,
}


export default loader(DoctorsMap, { wait: false })
