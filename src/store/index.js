/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import cityList from 'store/reducers/cityList/reducer';
import cityReducer from 'store/reducers/city/reducer';

const middleware = (store) => (next) => (action) => {
  if (action.request) {
    const {
      actions: { start, successed, error },
      requestParams,
      requestHandler,
    } = action.request;

    store.dispatch({ type: start });
    try {
      requestHandler(requestParams).then((response) => {
        store.dispatch({ type: successed, response });
      });
    } catch (err) {
      store.dispatch({ type: error, error: err });
    }
    return null;
  }
  return next(action);
};

const reducers = combineReducers({ cityList, city: cityReducer });
const store = createStore(reducers, applyMiddleware(thunk, logger, middleware));

export default store;
