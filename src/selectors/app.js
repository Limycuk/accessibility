const getState = (state) => state.app;

export const getIsOpenedMenu = (state) => getState(state).isOpenedMenu;
export const getIsEnableAccessibilityMode = (state) =>
  getState(state).isEnableAccessibilityMode;
export const getIsReadableMode = (state) => getState(state).isReadableMode;
