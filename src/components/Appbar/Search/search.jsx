import React, { PropTypes } from 'react'
import { IconButton, FontIcon, ProgressBar } from 'react-toolbox'
import loader from 'hoc-react-loader'
import styles from './search.style'

const Search = ({ className, where, what, onChangeWhere, onChangeWhat, updatePosition }) => (
  <div className={`${styles.search} ${className}`}>
    {(!where || !what) &&
    <div className={styles.label}>
      <FontIcon value="search" />
      Vous recherchez
    </div>}
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
  where: PropTypes.string,
  what: PropTypes.string,
  onChangeWhere: PropTypes.func,
  onChangeWhat: PropTypes.func,
  updatePosition: PropTypes.func,
}

export default loader(Search, {
  wait: ['where', 'what'],
  LoadingIndicator: () => <ProgressBar type="circular" mode="indeterminate" multicolor />,
})
