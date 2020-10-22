import {
  CITY_LIST_DOWLOADING_START,
  CITY_LIST_DOWLOADING_SUCCESSED,
  CITY_LIST_ADD_CITIES,
  CITY_LIST_CHANGE_FILTER_TYPE,
  CITY_LIST_DOWLOADING_ERROR,
} from './types';

const INITIAL_STATE_CITY_LIST = {
  cities: [
    {
      name: '',
      continent: '',
    },
  ],
  filterType: 'all',
  isDowloading: false,
};

const handlers = {
  [CITY_LIST_DOWLOADING_START]: (state, action) => {
    return { ...state, isDowloading: true };
  },
  [CITY_LIST_DOWLOADING_SUCCESSED]: (state, action) => {
    return { ...state, isDowloading: false };
  },
  [CITY_LIST_ADD_CITIES]: (state, action) => {
    return { ...state, cities: action.cities };
  },
  [CITY_LIST_CHANGE_FILTER_TYPE]: (state, action) => {
    return { ...state, filterType: action.filterType };
  },
  [CITY_LIST_DOWLOADING_ERROR]: (state, action) => {
    return { ...state, isDowloading: false };
  },
};

const cityListReducer = (state = INITIAL_STATE_CITY_LIST, action) => {
  const handler = handlers[action.type];
  if (handler) {
    return handler(state, action);
  }
  return state;
};

export { cityListReducer };
