import { combineReducers } from "redux";

import {AuthReducer } from "./AuthReducer";
import { PostReducer } from "./PostReducer";


//COMBINAMOS REDUCERS PARA PONERLOS EN UN MISMO OBJETO
const rootReducer = combineReducers({
    auth: AuthReducer,
    post:PostReducer
    
 })

 export default rootReducer