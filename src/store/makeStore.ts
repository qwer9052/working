import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';

import thunk from 'redux-thunk';

export const makeStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
