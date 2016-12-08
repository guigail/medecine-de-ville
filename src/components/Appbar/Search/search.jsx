import React, { PropTypes } from 'react'
import { IconButton, FontIcon } from 'react-toolbox'
import styles from './search.style'

const Search = ({ className, where, who, onChangeWhere, onChangeWho, updatePosition }) => (
  <div className={`${styles.search} ${className}`}>
    {(!where || !who) && <div className={styles.label}><FontIcon value="search" />Vous recherchez</div>}
    <div className={styles.box}>
      <input
        value={who}
        placeholder="Qui ?"
        onChange={e => onChangeWho(e)}
      />
    </div>
    <div className={styles.box}>
      <input value={where} placeholder="Où ?" onChange={e => onChangeWhere(e)} />
      <IconButton icon="my_location" onClick={updatePosition} />
    </div>
  </div>
)

Search.propTypes = {
  className: PropTypes.string,
}

export default Search
