/* eslint-disable no-unused-vars */
import searchCity from 'api/city/utils';

import {
  SELECT_CITY,
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

const selectCity = (city) => ({
  type: SELECT_CITY,
  city,
});

const getCity = (cityName) => ({
  request: {
    type: 'city',
    requestHandler: searchCity,
    requestParams: {
      cityName,
    },
    actions: {
      init: CITY_DOWLOADING_START,
      succeessed: CITY_DOWLOADING_SUCCESSED,
      city: SELECT_CITY,
      error: CITY_DOWLOADING_ERROR,
    },
  },
});

export {
  getCity, searchStarted, searchSuccessed, searchError, selectCity,
};
