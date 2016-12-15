import { setFilters } from 'redux/filters'
import { lazyFetchDoctors } from 'redux/doctors'
import { setFiltersActive, getFiltersActive } from 'redux/ui'

export const applyFilters = filters => (dispatch) => {
  dispatch(setFilters(filters))
  dispatch(lazyFetchDoctors())
}

export const toggleFilters = () => (dispatch, getState) =>
  dispatch(setFiltersActive(!getFiltersActive(getState())))
