import { combineReducers } from 'redux';

import isOpenedMenu from './isOpenedMenu';
import isEnableAccessibilityMode from './isEnableAccessibilityMode';
import isReadableMode from './isReadableMode';

const reducer = combineReducers({
  isOpenedMenu,
  isEnableAccessibilityMode,
  isReadableMode
});

export default reducer;
