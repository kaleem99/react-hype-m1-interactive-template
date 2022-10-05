import { combineReducers } from "redux";
import { BreadCrumbsReducer } from "./BreadCrumbsReducer";
import { sectionReducer } from "./SectionReducer";

import { StartReducer } from "./startButtonReducer";

export default combineReducers({
  SimpleStates: StartReducer,
  section: sectionReducer,
  BreadCrumbsSection: BreadCrumbsReducer,
});
