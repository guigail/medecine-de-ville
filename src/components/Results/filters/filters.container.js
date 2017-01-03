import { connect } from 'react-redux'
import { getFilters } from 'redux/filters'
import { getFiltersActive } from 'redux/ui'
import Component from './filters'
import { applyFiltersName, applyFiltersRAC, toggleFilters } from './filters.actions'

const mapStateToProps = state => ({
  filters: getFilters(state),
  activeFilters: getFiltersActive(state),
})

const mapDispatchToProps = dispatch => ({
  applyFiltersRAC: RAC => dispatch(applyFiltersRAC(RAC)),
  applyFiltersName: name => dispatch(applyFiltersName(name)),
  toggleFilters: () => dispatch(toggleFilters()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
