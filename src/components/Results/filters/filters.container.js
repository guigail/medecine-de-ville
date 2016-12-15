import { connect } from 'react-redux'
import { getFilters } from 'redux/filters'
import { getFiltersActive } from 'redux/ui'
import Component from './filters'
import { applyFiltersName, applyFiltersRAC, toggleFilters } from './filters.actions'

const mapStateToProps = (state) => {
  const filters = getFilters(state)
  const activeFilters = getFiltersActive(state)

  return {
    filters,
    activeFilters,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    applyFiltersRAC: RAC => dispatch(applyFiltersRAC(RAC)),
    applyFiltersName: name => dispatch(applyFiltersName(name)),
    toggleFilters: () => dispatch(toggleFilters()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
