import { combineReducers } from "redux";

import countReducer from './Counter.reducer'
import getUserReducer from './getUser.reducer'
import getCrudReducer from './getCrud.reducer'


const rootReducer = combineReducers({countReducer: countReducer, getUsersReducer: getUserReducer, getCrudReducer: getCrudReducer})

export default rootReducer