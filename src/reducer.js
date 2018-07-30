import { combineReducers } from 'redux'
import { apolloReducer } from 'apollo-cache-redux';


const rootReducer = combineReducers({
  apollo: apolloReducer
})

export default rootReducer
