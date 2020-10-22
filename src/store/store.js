import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { CITY_SEARCH_FINISHED } from './reducers/types';

const INITIAL_STATE_CITY = {
  cityData: null,
  isCityLoading: false,
  isLoadingError: false,
};

const handlers = {
  [CITY_SEARCH_STARTED]: (state, action) => {
    return { ...state, ...action };
  },
  [CITY_SEARCH_FINISHED]: (state, action) => {
    return { ...state, ...action };
  },
  [CITY_SEARCH_ERROR]: (state, action) => {
    return { ...state, ...action };
  },
};

const cityReducer = (state = INITIAL_STATE_CITY, action) => {
  const handler = handlers[action.type];

  if (handler) {
    return handler(state, action);
  }

  return state;
};
export const searchStore = createStore(cityReducer, applyMiddleware(thunk, logger));
