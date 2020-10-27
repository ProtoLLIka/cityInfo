import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { cityList } from './reducers/cityList/cityListReducer';
import { city } from './reducers/city/cityReducer';

const reducers = combineReducers({ cityList, city });
const store = createStore(reducers, applyMiddleware(thunk, logger));

export { store };
