import React, { PropTypes } from 'react'
import { IconButton, FontIcon } from 'react-toolbox'
import styles from './search.style'

const Search = ({ className, where, what, onChangeWhere, onChangeWhat, updatePosition }) => (
  <div className={`${styles.search} ${className}`}>
    {(!where || !what) && <div className={styles.label}><FontIcon value="search" />Vous recherchez</div>}
    <div className={styles.box}>
      <input
        value={what}
        placeholder="Qui ?"
        onChange={e => onChangeWhat(e)}
      />
    </div>
    <div className={styles.box}>
      <input value={where} placeholder="Où ?" onChange={e => onChangeWhere(e)} />
      <IconButton icon="my_location" onClick={updatePosition} disabled />
    </div>
  </div>
)

Search.propTypes = {
  className: PropTypes.string,
}

export default Search
