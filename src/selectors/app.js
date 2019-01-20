const getState = state => state.app;

export const getIsOpenedMenu = state => getState(state).isOpenedMenu;
export const getIsEnableDeafMode = state => getState(state).isEnableDeafMode;
export const getIsReadableMode = state => getState(state).isReadableMode;
