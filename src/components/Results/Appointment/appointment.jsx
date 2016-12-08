import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import { ListItem } from 'react-toolbox/lib/list'

const Appointment = ({ id, doctor, showOnMap, showInfo }) => (
  <ListItem
    selectable
    onClick={() => { showOnMap(id, true); showInfo(id) }}
    avatar="https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg"
    caption={doctor.name}
    legend={doctor.address_street}
  />
)

Appointment.propTypes = {
  id: PropTypes.number.isRequired,
  doctor: PropTypes.object.isRequired,
  showOnMap: PropTypes.function,
  showInfo: PropTypes.function,
}

export default loader(Appointment, { wait: false })

