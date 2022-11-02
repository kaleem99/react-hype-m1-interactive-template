import { combineReducers } from "redux";
import {
  BreadCrumbsReducer,
  MobileBreadCrumbsReducer,
} from "./BreadCrumbsReducer";
import navigationReducer from "./navigationReducer";
import { optionReducer } from "./optionReducer";
import { sectionReducer } from "./sectionReducer";

import { StartReducer } from "./startButtonReducer";

export default combineReducers({
  SimpleStates: StartReducer,
  option: optionReducer,
  BreadCrumbsSection: BreadCrumbsReducer,
  section: sectionReducer,
  navigation: navigationReducer,
  MobileBreadCrumbsSection: MobileBreadCrumbsReducer,
});
