import { combineReducers } from "redux";

import countReducer from './Counter.reducer'
import getUserReducer from './getUser.reducer'
import getCrudReducer from './getCrud.reducer'
import googleLoginReducer from './googleLogin.reducer'



const rootReducer = combineReducers({countReducer: countReducer, getUsersReducer: getUserReducer, getCrudReducer: getCrudReducer, googleLoginReducer})

export default rootReducer