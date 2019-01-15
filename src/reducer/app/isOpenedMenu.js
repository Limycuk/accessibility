import { handleActions } from 'redux-actions';

import * as appActions from '../../actions/app';

const defaultState = false;

export default handleActions(
  {
    [appActions.toggleDrawer](state) {
      return !state;
    }
  },
  defaultState
);
