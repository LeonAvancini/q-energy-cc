import { combineReducers } from "redux";

import projectReducer from "./projectReducer";

const allReducers = combineReducers({
  projectInfo: projectReducer,
});

export default allReducers;
