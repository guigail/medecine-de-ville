import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import { ListItem, FontIcon, Tooltip, IconButton } from 'react-toolbox'
const TooltipButton = Tooltip(IconButton)
const Doctor = ({ id, doctor, haveAppointment, showOnMap, showInfo }) => (
  <ListItem
    selectable
    onClick={() => {showOnMap(id, true); showInfo(id)}}
    avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
    caption={doctor.name}
    legend={doctor.address.address_street}
    onMouseUp={() => alert("COUOCU")}
    rightIcon={!haveAppointment ?
      <TooltipButton label=''
                     icon='date_range'
                     primary
                     tooltip='Prendre rendez-vous'
                     tooltipDelay={500}
                     tooltipPosition='right'/>
                     : 'date_range'
    }
  />
)

Doctor.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number.isRequired,
  doctor: PropTypes.object.isRequired,
  lastOne: PropTypes.bool,
}

export default loader(Doctor, { wait: false })
