import { connect } from 'react-redux'
import Component from './googlemap'

const mapStateToProps = (state, props) => props

export default connect(mapStateToProps)(Component)
