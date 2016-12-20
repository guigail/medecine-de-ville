import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import { ProgressBar } from 'react-toolbox'
import Avatar from 'react-avatar'

const AvatarDoctor = ({ name, photo }) => (
  photo ?
    <Avatar round size={50} src={photo} /> :
    <Avatar round size={50} name={name} />
)

AvatarDoctor.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string,
}

export default loader(AvatarDoctor, {
  wait: ['name'],
  LoadingIndicator: () => <ProgressBar type="circular" mode="indeterminate" multicolor />,
})
