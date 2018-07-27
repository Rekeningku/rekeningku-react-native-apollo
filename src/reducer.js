import { combineReducers } from 'redux'
import counterReducer from './modules/counter/reducer'
import { apolloReducer } from 'apollo-cache-redux';


const rootReducer = combineReducers({
  counter: counterReducer,
  apollo: apolloReducer
})

export default rootReducer
