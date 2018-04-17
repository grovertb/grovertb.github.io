import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import userStore from './userStore'

export default combineReducers({
  routing: routerReducer,
  userStore
})
