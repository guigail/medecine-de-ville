import { connect } from 'react-redux'
import { getWhere, getWho } from 'redux/search'
import { DOCTORS_LIST_TYPE } from 'redux/constants'
import { changeWhere, changeWho, updateMyPosition } from './search.actions'

import Component from './search'

const mapStateToProps = (state) => {
  return {
    where: getWhere(state),
    who: getWho(state),
    whoSource: DOCTORS_LIST_TYPE,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeWhere: e => dispatch(changeWhere(e.target.value)),
    onChangeWho: e => dispatch(changeWho(e.target.value)),
    updatePosition: () => dispatch(updateMyPosition()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
