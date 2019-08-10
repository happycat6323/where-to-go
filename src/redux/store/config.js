import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import combineReducer from '../reducers/index';
import rootEpic from '../../epics/index';

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
  combineReducer,
  {},
  composeWithDevTools(applyMiddleware(epicMiddleware)),
);

export default store;
