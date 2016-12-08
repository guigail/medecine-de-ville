import React, {PropTypes} from 'react'
import loader from 'hoc-react-loader'
import {withGoogleMap, GoogleMap, InfoWindow, Marker, Circle, ProgressBar} from 'react-google-maps'
import {find} from 'lodash'
import MarkerClusterer from 'react-google-maps/lib/addons/MarkerClusterer'

const iconPosition = {
    url: '/src/images/markers/myposition.png',
    size: new google.maps.Size(16, 16),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(8, 8),
}

const iconDoctor = {
    url: '/src/images/markers/doctor.png',
    size: new google.maps.Size(24, 34),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 17),
}

const iconDoctorSelected = {
    url: '/src/images/markers/doctor.selected.png',
    size: new google.maps.Size(24, 34),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 17),
}

const centerOfSelection = (markers, defaultPosition) => {
    const marker = find(markers, {selected: true})
    return marker ? marker.position : defaultPosition
}

const GoogleMapMarker = withGoogleMap(({markers, position, onMarkerClick, onMarkerClose}) => (
    <GoogleMap defaultZoom={12} center={centerOfSelection(markers, position)}>
        <MarkerClusterer
            averageCenter
            gridSize={30}
            imagePath="/src/images/markers/cluster/doctors"
        >
            {markers.map(({id, position, showInfo, infoContent, selected}) => (
                <Marker
                    key={id}
                    position={position}
                    icon={selected ? iconDoctorSelected : iconDoctor}
                    onClick={() => onMarkerClick(id, true)}
                >
                    {showInfo &&
                    (<InfoWindow onCloseClick={() => onMarkerClose(id)}>
                        <div>{infoContent}</div>
                    </InfoWindow>)
                    }
                </Marker>
            ))}
        </MarkerClusterer>

        {position &&
        <Marker
            key='POSITION'
            position={position}
            icon={iconPosition}
        /> }
        {position &&
        <Circle
            center={position}
            radius={100}
            options={{fillColor: 'blue', fillOpacity: 0.1, strokeOpacity: 0}}
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
    LoadingIndicator: () => <ProgressBar type='circular' mode='indeterminate' multicolor/>,
})
