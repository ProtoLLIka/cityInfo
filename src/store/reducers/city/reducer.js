import {
  // SELECT_CITY,
  CITY_DOWLOADING_START,
  CITY_DOWLOADING_SUCCESSED,
  CITY_DOWLOADING_ERROR,
} from './actionsTypes';

const INITIAL_STATE_CITY = {
  city: null,
  isLoading: false,
};

const handlers = {
  // [SELECT_CITY]: (state, { city }) => ({ ...state, city }),
  [CITY_DOWLOADING_START]: (state) => ({ ...state, isLoading: true }),
  [CITY_DOWLOADING_SUCCESSED]: (state, { response }) => ({
    ...state,
    isLoading: false,
    city: response,
  }),
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
