import React, { PropTypes } from 'react'
import { NavDrawer, IconButton } from 'react-toolbox';

const Menu = ({ active, pinned, toggleDrawerActive, toggleDrawerPinned }) => (
  <NavDrawer
    active={active}
    pinned={pinned}
    onOverlayClick={toggleDrawerActive}
  >
    <div><IconButton icon="close" onClick={toggleDrawerPinned} /></div>
  </NavDrawer>
)

export default Menu
