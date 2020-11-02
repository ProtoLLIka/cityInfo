import searchCity from 'api/city/utils';
import {
  SELECT_CITY,
  CITY_DOWLOADING_START,
  CITY_DOWLOADING_SUCCESSED,
  CITY_DOWLOADING_ERROR,
} from './types';

const searchStarted = () => ({
  type: CITY_DOWLOADING_START,
  isLoading: true,
});

const searchSuccessed = () => ({
  type: CITY_DOWLOADING_SUCCESSED,
  isLoading: false,
});

const searchError = (err) => ({
  type: CITY_DOWLOADING_ERROR,
  isLoading: false,
  error: err,
});

const selectCity = (city) => ({
  type: SELECT_CITY,
  city,
});

const getCity = (cityName) => (dispatch) => {
  dispatch(searchStarted());

  searchCity(cityName)
    .then(({ city }) => {
      dispatch(searchSuccessed());
      dispatch(selectCity(city));
    })
    .catch((err) => {
      dispatch(searchError(err));
    });
};

export default getCity;
