import { createAction } from "redux-actions";

import { NAMESPACE } from "../constants/app";

export const toggleDrawer = createAction(NAMESPACE + "TOGGLE_DRAWER");
export const toggleDeafMode = createAction(NAMESPACE + "TOGGLE_DEAF_MODE");
