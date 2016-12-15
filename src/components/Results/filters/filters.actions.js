import { setFilterRAC, setFilterName, getFilters } from 'redux/filters'
import { lazyFetchDoctors } from 'redux/doctors'
import { setFiltersActive, getFiltersActive } from 'redux/ui'

export const applyFiltersRAC = RAC => (dispatch) => {
  dispatch(setFilterRAC(RAC))
  dispatch(lazyFetchDoctors())
}

export const applyFiltersName = name => (dispatch) => {
  dispatch(setFilterName(name))
  dispatch(lazyFetchDoctors())
}

export const toggleFilters = () => (dispatch, getState) =>
  dispatch(setFiltersActive(!getFiltersActive(getState())))
