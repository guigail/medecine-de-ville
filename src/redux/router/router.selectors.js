export const getRouter = state => state.router
export const getParams = state => getRouter(state).params
export const getId = state => getParams(state).id
export const getQuery = state => getParams(state).query
export const getTitle = state => getRouter(state).result.title
