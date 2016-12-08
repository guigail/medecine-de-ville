import React from 'react'
import { AppBar } from 'react-toolbox'
import Search from './Search'
import styles from './appbar.style'

const Appbar = ({ search: { where, who }, toggleDrawerActive }) => {
  return (
    <AppBar
      theme={styles}
      className={!where || !who ? styles.searchless : ''}
      onLeftIconClick={toggleDrawerActive}
      title="Médecine de ville"
      leftIcon="menu"
    >
      <Search className={!where || !who ? styles.search : ''} />
    </AppBar>
  )
}

export default Appbar
