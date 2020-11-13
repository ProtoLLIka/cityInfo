import searchCity from 'api/city/utils';

import {
  CITY_DOWLOADING_START,
  CITY_DOWLOADING_SUCCESSED,
  CITY_DOWLOADING_ERROR,
} from './actionsTypes';

const searchStarted = () => ({
  type: CITY_DOWLOADING_START,
});

const searchSuccessed = () => ({
  type: CITY_DOWLOADING_SUCCESSED,
});

const searchError = (err) => ({
  type: CITY_DOWLOADING_ERROR,
  error: err,
});

const getCity = (cityName) => ({
  request: {
    requestHandler: searchCity,
    requestParams: {
      cityName,
    },
    actions: {
      start: CITY_DOWLOADING_START,
      successed: CITY_DOWLOADING_SUCCESSED,
      error: CITY_DOWLOADING_ERROR,
    },
  },
});

export {
  getCity, searchStarted, searchSuccessed, searchError,
};
