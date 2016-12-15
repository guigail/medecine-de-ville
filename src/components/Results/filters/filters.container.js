import { connect } from 'react-redux'
import { getFilters } from 'redux/filters'
import { getFiltersActive } from 'redux/ui'
import Component from './filters'
import { applyFilters, toggleFilters } from './filters.actions'

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
    applyRACFilters: RAC => dispatch(applyFilters({ filters: { RAC } })),
    applyNameFilters: name => dispatch(applyFilters({ filters: { name } })),
    toggleFilters: () => dispatch(toggleFilters()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
