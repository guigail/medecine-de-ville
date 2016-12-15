export const SET_FILTERS = 'SET_FILTERS'
export const setFilters = filters => ({ type: SET_FILTERS, payload: filters })

export const SET_FILTER_RAC = 'SET_FILTER_RAC'
export const setFilterRAC = RAC => ({ type: SET_FILTER_RAC, payload: RAC })

export const SET_FILTER_NAME = 'SET_FILTER_NAME'
export const setFilterName = name => ({ type: SET_FILTER_NAME, payload: name })

export const DELETE_FILTERS = 'DELETE_FILTERS'
export const deleteFilters = () => ({ type: DELETE_FILTERS })
