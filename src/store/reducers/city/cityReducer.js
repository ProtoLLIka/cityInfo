import {
  SELECT_CITY,
  CITY_DOWLOADING_START,
  CITY_DOWLOADING_SUCCESSED,
  CITY_DOWLOADING_ERROR,
} from './types';

const INITIAL_STATE_CITY = {
  city: {
    name: '',
    id: '',
    location: {
      lat: 0,
      lng: 0,
    },
    population: 0,
    titleImg: '',
    categoryChart: [],
    summary: '',
  },
  isDowloading: false,
};

const handlers = {
  [SELECT_CITY]: (state, action) => {
    return { ...state, city: action.city };
  },
  [CITY_DOWLOADING_START]: (state, action) => {
    return { ...state, isDowloading: true };
  },
  [CITY_DOWLOADING_SUCCESSED]: (state, action) => {
    return { ...state, isDowloading: false };
  },
  [CITY_DOWLOADING_ERROR]: (state, action) => {
    return { ...state, isDowloading: false };
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
