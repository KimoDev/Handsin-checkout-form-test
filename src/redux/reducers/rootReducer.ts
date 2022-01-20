import { combineReducers } from "redux";
import formReducer from "./formReducer";
import stepReducer from "./stepReducer";


const rootReducer = combineReducers({formReducer, stepReducer})

export default rootReducer;