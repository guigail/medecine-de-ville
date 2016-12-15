export const SET_FILTERS = 'SET_FILTERS'
export const setFilters = filters => ({ type: SET_FILTERS, payload: filters })

export const DELETE_FILTERS = 'DELETE_FILTERS'
export const deleteFilters = () => ({ type: DELETE_FILTERS })
