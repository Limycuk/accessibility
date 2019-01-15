import { reducer as reduxFormReducer } from 'redux-form';
import { combineReducers } from 'redux';

import app from './app';

const reducer = combineReducers({
  app,
  form: reduxFormReducer
});

export default reducer;
