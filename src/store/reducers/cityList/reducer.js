import {
  CITY_LIST_DOWLOADING_START,
  CITY_LIST_DOWLOADING_SUCCESSED,
  CITY_LIST_ADD_CITIES,
  CITY_LIST_CHANGE_FILTER_TYPE,
  CITY_LIST_LOADING_ERROR,
} from './types';

const INITIAL_STATE_CITY_LIST = {
  cities: [],
  filterType: 'all',
  isLoading: false,
};

const handlers = {
  [CITY_LIST_DOWLOADING_START]: (state) => ({ ...state, isDowloading: true }),
  [CITY_LIST_DOWLOADING_SUCCESSED]: (state) => ({ ...state, isDowloading: false }),
  [CITY_LIST_ADD_CITIES]: (state, { cities }) => ({ ...state, cities }),
  [CITY_LIST_CHANGE_FILTER_TYPE]: (state, action) => ({ state, filterType: action.filterType }),
  [CITY_LIST_LOADING_ERROR]: (state) => ({ ...state, isDowloading: false }),
};

const cityList = (state = INITIAL_STATE_CITY_LIST, action) => {
  const handler = handlers[action.type];

  if (handler) {
    return handler(state, action);
  }

  return state;
};

export default cityList;
