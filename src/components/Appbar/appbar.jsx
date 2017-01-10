import React, { PropTypes } from 'react'
import { AppBar } from 'react-toolbox'
import Search from './Search'
import styles from './appbar.style'

const Appbar = ({ searchIsActive, toggleDrawerActive }) => {
  return (
    <AppBar
      theme={styles}
      className={!searchIsActive ? styles.searchless : ''}
      onLeftIconClick={toggleDrawerActive}
      title="Médecine de ville"
      leftIcon="menu"
    >
      <Search className={!searchIsActive ? styles.search : ''} />
    </AppBar>
  )
}

Appbar.propTypes = {
  searchIsActive: PropTypes.bool,
  toggleDrawerActive: PropTypes.func,
}

export default Appbar
