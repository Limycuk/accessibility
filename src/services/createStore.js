import { /* applyMiddleware, compose, */ createStore } from 'redux';

import reducer from '../reducer';

export default () => {
  // const composeEnhancers =
  //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // composeEnhancers(applyMiddleware({}))
  const store = createStore(reducer);

  return { store };
};
