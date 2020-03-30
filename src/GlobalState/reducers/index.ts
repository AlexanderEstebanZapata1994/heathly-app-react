import loginReducer from './loginReducer'
import { combineReducers } from 'redux'

const combinedReducers = combineReducers({
    loginReducer
})

export default combinedReducers;