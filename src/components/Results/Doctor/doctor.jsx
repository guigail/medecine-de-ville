import React, {PropTypes} from 'react'
import loader from 'hoc-react-loader'
import {ListItem, FontIcon, Tooltip, IconButton} from 'react-toolbox'
import {styles} from './doctor.style'

const TooltipButton = Tooltip(IconButton)
const Doctor = ({id, doctor, haveAppointment, showOnMap, showInfo}) => (
    <ListItem
        themes={styles}
        selectable
        caption={doctor.name}
        legend={doctor.address.address_street}
        rightIcon={!haveAppointment ?
            <TooltipButton label=''
                           icon='date_range'
                           primary
                           tooltip='Prendre rendez-vous'
                           tooltipDelay={500}
                           tooltipPosition='right'/>
            : 'date_range'
        }
        onClick={() => {
            showOnMap(id, true);
            showInfo(id)
        }}
    />
)

Doctor.propTypes = {
    className: PropTypes.string,
    id: PropTypes.number.isRequired,
    doctor: PropTypes.object.isRequired,
    lastOne: PropTypes.bool,
}

export default loader(Doctor, {wait: false})
