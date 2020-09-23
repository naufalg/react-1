import { combineReducers } from "redux";

import counterReducer from './Counter.reducer'
import getUserReducer from './getUser.reducer'

const rootReducer = combineReducers({counter: counterReducer, getUsers: getUserReducer})

export default rootReducer