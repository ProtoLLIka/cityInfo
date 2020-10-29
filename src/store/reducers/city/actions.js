import searchCity from 'api/city/utils';

import {
  SELECT_CITY,
  CITY_DOWLOADING_START,
  CITY_DOWLOADING_SUCCESSED,
  CITY_DOWLOADING_ERROR,
} from './types';

const searchStarted = () => ({
  type: CITY_DOWLOADING_START,
});

const searchSeccessed = () => ({
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

const getCity = (cityName) => (dispatch) => {
  dispatch(searchStarted());
  searchCity(cityName)
    .then((res) => {
      dispatch(searchSeccessed());
      dispatch(selectCity(res));
    })
    .catch((err) => {
      dispatch(searchError(err));
    });
};

export default getCity;
