import { connect } from 'react-redux'
import { getWhere, getWhat } from 'redux/search'
import { DOCTORS_LIST_TYPE } from 'redux/constants'
import { changeWhere, changeWhat, updateMyPosition } from './search.actions'

import Component from './search'

const mapStateToProps = (state) => {
  return {
    where: getWhere(state),
    what: getWhat(state),
    whatSource: DOCTORS_LIST_TYPE,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeWhere: e => dispatch(changeWhere(e.target.value)),
    onChangeWhat: e => dispatch(changeWhat(e.target.value)),
    updatePosition: () => dispatch(updateMyPosition()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
