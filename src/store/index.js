import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { cityListReducer } from './reducers/cityList/cityListReducer';
import { cityReducer } from './reducers/city/cityReducer';

const reducers = combineReducers({ cityListReducer, cityReducer });
const store = createStore(reducers, applyMiddleware(thunk, logger));

export { store };
