import { createStore, applyMiddleware, combineReducers } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';

import cityList from 'store/reducers/cityList/reducer';
import city from 'store/reducers/city/reducer';

const middleware = (store) => (next) => (action) => {
  if (action.request) {
    store.dispatch(action[0]);
    try {
      axios.get();
      store.dispatch(action[1]);
    } catch {
      store.dispatch(action[2]);
    }
    return next();
  }

  return next();
};
const reducers = combineReducers({ cityList, city });
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
