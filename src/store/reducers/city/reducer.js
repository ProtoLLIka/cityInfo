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
  isLoading: false,
};

const handlers = {
  [SELECT_CITY]: (state, action) => ({ ...state, city: action.city }),
  [CITY_DOWLOADING_START]: (state) => ({ ...state, isLoading: true }),
  [CITY_DOWLOADING_SUCCESSED]: (state) => ({ ...state, isLoading: false }),
  [CITY_DOWLOADING_ERROR]: (state) => ({ ...state, isLoading: false }),
};

const city = (state = INITIAL_STATE_CITY, action) => {
  const handler = handlers[action.type];

  if (handler) {
    return handler(state, action);
  }

  return state;
};

export default city;
