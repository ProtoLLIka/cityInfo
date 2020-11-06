import { getAllCities } from 'api/cityList';

import {
  CITY_LIST_ADD_CITIES,
  CITY_LIST_CHANGE_FILTER_TYPE,
  CITY_LIST_LOADING_ERROR,
  CITY_LIST_LOADING_START,
  CITY_LIST_LOADING_SUCCESSED,
} from './types';

const changeFilter = (type) => ({
  type: CITY_LIST_CHANGE_FILTER_TYPE,
  filterType: type,
});

const loadingStarted = () => ({
  type: CITY_LIST_LOADING_START,
});

const loadingSuccessful = () => ({
  type: CITY_LIST_LOADING_SUCCESSED,
});

const loadingError = (error) => ({
  type: CITY_LIST_LOADING_ERROR,
  error,
});

const setCities = (cities) => ({
  type: CITY_LIST_ADD_CITIES,
  cities,
});

const generateCityList = () => (dispatch) => {
  dispatch(loadingStarted());

  getAllCities()
    .then((res) => {
      dispatch(loadingSuccessful());
      dispatch(setCities(res));
    })
    .catch((err) => {
      dispatch(loadingError(err));
    });
};

export { generateCityList, changeFilter };
