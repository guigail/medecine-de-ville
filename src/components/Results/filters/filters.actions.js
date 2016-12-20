import { setFilterRAC, setFilterName, getFilters } from 'redux/filters'
import { filterDoctors } from 'redux/doctors'
import { setFiltersActive, getFiltersActive } from 'redux/ui'

export const applyFiltersRAC = RAC => (dispatch) => {
  dispatch(setFilterRAC(RAC))
  dispatch(filterDoctors())
}

export const applyFiltersName = name => (dispatch) => {
  dispatch(setFilterName(name))
  dispatch(filterDoctors())
}

export const toggleFilters = () => (dispatch, getState) =>
  dispatch(setFiltersActive(!getFiltersActive(getState())))
