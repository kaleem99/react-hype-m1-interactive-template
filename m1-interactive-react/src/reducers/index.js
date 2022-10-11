import { combineReducers } from "redux";
import { BreadCrumbsReducer } from "./BreadCrumbsReducer";
import { optionReducer } from "./optionReducer";
import { sectionReducer } from "./sectionReducer";

import { StartReducer } from "./startButtonReducer";

export default combineReducers({
  SimpleStates: StartReducer,
  option: optionReducer,
  BreadCrumbsSection: BreadCrumbsReducer,
  section: sectionReducer,
});
