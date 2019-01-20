import { combineReducers } from "redux";

import isOpenedMenu from "./isOpenedMenu";
import isEnableDeafMode from "./isEnableDeafMode";

const reducer = combineReducers({
  isOpenedMenu,
  isEnableDeafMode
});

export default reducer;
