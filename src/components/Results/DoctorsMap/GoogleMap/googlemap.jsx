import React, { PropTypes } from 'react'
import { find } from 'lodash'
import loader from 'hoc-react-loader'
import { withGoogleMap, GoogleMap, InfoWindow, Marker, Circle } from 'react-google-maps'
import { ProgressBar } from 'react-toolbox'
import { iconPosition, iconDoctor, iconDoctorSelected } from './images'

const centerOfSelection = (markers, defaultPosition) => {
  const marker = find(markers, { ui: { selected: true } })
  return marker ? marker.position : defaultPosition
}

const GoogleMapMarker = withGoogleMap(({ markers, position, onMarkerClick, onMarkerClose }) => (
  <GoogleMap defaultZoom={12} center={centerOfSelection(markers, position)}>

    {markers.map(({ id, position, showInfo, infoContent }) => (
      <Marker
        key={id}
        position={position}
        icon={showInfo ? iconDoctorSelected : iconDoctor}
        onClick={() => onMarkerClick(id, false)}
        opacity={showInfo ? 1 : 0.7}
      >
        {showInfo &&
        (<InfoWindow onCloseClick={() => onMarkerClose(id)}>
          <div>{infoContent}</div>
        </InfoWindow>)
        }
      </Marker>
    ))}

    {position &&
    <Marker
      key="POSITION"
      position={position}
      icon={iconPosition}
      animation={google.maps.Animation.BOUNCE}
    /> }
    {position &&
    <Circle
      center={position}
      radius={100}
      options={{ fillColor: 'blue', fillOpacity: 0.1, strokeOpacity: 0 }}
    />
    }
  </GoogleMap>
))

GoogleMapMarker.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.object),
  position: PropTypes.object,
  onMarkerClick: PropTypes.func,
  onMarkerClose: PropTypes.func,
}

export default loader(GoogleMapMarker, {
  wait: ['markers'],
  LoadingIndicator: () => <ProgressBar type="circular" mode="indeterminate" multicolor />,
})
