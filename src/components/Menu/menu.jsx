import React, { PropTypes } from 'react'
import { NavDrawer, IconButton } from 'react-toolbox'

const Menu = ({ active, pinned, toggleDrawerActive }) => (
  <NavDrawer
    active={active}
    pinned={pinned}
    onOverlayClick={toggleDrawerActive}
  >
    <div>
      <IconButton icon="menu" onClick={toggleDrawerActive} />
      <h1>Médecine de ville</h1>
    </div>
  </NavDrawer>
)

Menu.PropTypes = {
  active: PropTypes.bool.isRequired,
  pinned: PropTypes.bool.isRequired,
  toggleDrawerActive: PropTypes.func.isRequired,
}

export default Menu
