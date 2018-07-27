import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
// import { apolloReducer } from 'apollo-cache-redux';


// export default createStore(
//     combineReducers({
//         ...reducer,
//         apollo: apolloReducer
//     })
// )

export default createStore(reducer, applyMiddleware(logger))
