import React, { PropTypes } from 'react'
import { Sidebar, IconButton } from 'react-toolbox'
import styles from './infobar.styles'

const Infobar = ({ pinned, toggleSidebarPinned }) => (
  <Sidebar
    theme={styles}
    pinned={pinned}
    width={25}
  >
    <div className={styles.actions}>
      <IconButton theme={styles} icon="close" onClick={toggleSidebarPinned} />
    </div>
  </Sidebar>
)

Infobar.propTypes = {
  pinned: PropTypes.bool.isRequired,
  toggleSidebarPinned: PropTypes.func.isRequired,
}

export default Infobar
