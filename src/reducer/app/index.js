import { combineReducers } from "redux";

import isOpenedMenu from "./isOpenedMenu";
import isEnableDeafMode from "./isEnableDeafMode";
import isReadableMode from "./isReadableMode";

const reducer = combineReducers({
  isOpenedMenu,
  isEnableDeafMode,
  isReadableMode
});

export default reducer;
