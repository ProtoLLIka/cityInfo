import { CITY_SEARCH_FINISHED, CITY_SEARCH_STARTED, CITY_SEARCH_ERROR } from './types';

const INITIAL_STATE_CITY = {
  city: null,
  isDowloading: false,
  isLoadingError: false,
};

const handlers = {
  [CITY_SEARCH_STARTED]: (state, action) => {
    return { ...state, isDowloading: true };
  },
  [CITY_SEARCH_FINISHED]: (state, action) => {
    return { ...state, isDowloading: false };
  },
  [CITY_SEARCH_ERROR]: (state, action) => {
    return { ...state, isLoadingError: true };
  },
};

const cityReducer = (state = INITIAL_STATE_CITY, action) => {
  const handler = handlers[action.type];
  if (handler) {
    return handler(state, action);
  }
  return state;
};

export { cityReducer };
