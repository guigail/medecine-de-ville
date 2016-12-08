import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createStoreWithRouter, initializeCurrentLocation } from 'redux-little-router'
import thunkMiddleware from 'redux-thunk'
import router from './router'
import search from './search'
import user from './user'
import doctors from './doctors'
import ui from './ui'
import appointments from './appointments'

const store = createStore(
  combineReducers({
    search,
    user,
    doctors,
    appointments,
    ui,
  }),
  compose(
    applyMiddleware(thunkMiddleware),
    createStoreWithRouter({
      routes: router,
      pathname: window.location.pathname,
    }),
    /* eslint-env browser */
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const initialLocation = store.getState().router
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation))
}

export default store
