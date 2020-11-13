import { ALL } from 'consts/continentNames';

import {
  CITY_LIST_LOADING_START,
  CITY_LIST_LOADING_SUCCESSED,
  CITY_LIST_ADD_CITIES,
  CITY_LIST_CHANGE_FILTER_TYPE,
  CITY_LIST_LOADING_ERROR,
} from './actionsTypes';

const INITIAL_STATE_CITY_LIST = {
  cities: [],
  filterType: ALL,
  isLoading: false,
};

const handlers = {
  [CITY_LIST_LOADING_START]: (state) => ({ ...state, isLoading: true }),
  [CITY_LIST_LOADING_SUCCESSED]: (state, { response }) => ({
    ...state,
    isLoading: false,
    cities: response,
  }),
  [CITY_LIST_ADD_CITIES]: (state, { cities }) => ({ ...state, cities }),
  [CITY_LIST_CHANGE_FILTER_TYPE]: (state, { filterType }) => ({ ...state, filterType }),
  [CITY_LIST_LOADING_ERROR]: (state) => ({ ...state, isLoading: false }),
};

const cityList = (state = INITIAL_STATE_CITY_LIST, action) => {
  const handler = handlers[action.type];

  if (handler) {
    return handler(state, action);
  }

  return state;
};

export default cityList;
