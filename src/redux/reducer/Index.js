import { combineReducers } from "redux";

import countReducer from './Counter.reducer'
import getUserReducer from './getUser.reducer'

const rootReducer = combineReducers({countReducer: countReducer, getUsersReducer: getUserReducer})

export default rootReducer