import { combineReducers } from "redux";

import taskReducer from "./taskReducer";

console.log(taskReducer);

export default combineReducers({ taskReducer });