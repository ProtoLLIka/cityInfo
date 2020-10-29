import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import cityList from 'store/reducers/cityList/reducer';
import city from 'store/reducers/city/reducer';

const reducers = combineReducers({ cityList, city });
const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
