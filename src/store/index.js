import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { cityListReducer } from './reducers/cityList/cityListReducer';

const store = createStore(cityListReducer, applyMiddleware(thunk, logger));
export { store };
