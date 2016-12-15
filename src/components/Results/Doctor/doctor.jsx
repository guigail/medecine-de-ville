import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import { ListItem, Tooltip, IconButton } from 'react-toolbox'
import { styles } from './doctor.style'

const TooltipButton = new Tooltip(IconButton)
const Doctor = ({ id, doctor, haveAppointment, showOnMap, showInfo }) => (
  <ListItem
    themes={styles}
    selectable
    caption={doctor.name}
    legend={`${doctor.address.address_street} - RAC [${doctor.RAC}]`}
    rightIcon={
      <TooltipButton
        label=""
        icon="date_range"
        primary={!haveAppointment}
        tooltip="Prendre rendez-vous"
        tooltipDelay={500}
        tooltipPosition="right"
        onClick={() => { showInfo(id) }}
      />}
    onClick={() => { showOnMap(id, true) }}
  />
)

Doctor.propTypes = {
  id: PropTypes.number.isRequired,
  doctor: PropTypes.object.isRequired,
  haveAppointment: PropTypes.bool,
  showOnMap: PropTypes.func,
  showInfo: PropTypes.func,
}

export default loader(Doctor, { wait: false })
