import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { apolloReducer } from 'apollo-cache-redux'

const rootReducer = combineReducers({
  apollo: apolloReducer,
  form: formReducer,
})
const store = createStore(rootReducer)

export default rootReducer
