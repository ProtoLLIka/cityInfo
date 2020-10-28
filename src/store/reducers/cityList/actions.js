import {
  CITY_LIST_ADD_CITIES,
  CITY_LIST_CHANGE_FILTER_TYPE,
  CITY_LIST_DOWLOADING_START,
  CITY_LIST_LOADING_ERROR,
  CITY_LIST_DOWLOADING_SUCCESSED,
} from './types';
import { getAllCities } from '../../../api/cityList';

const changeFilter = (type) => ({
  type: CITY_LIST_CHANGE_FILTER_TYPE,
  filterType: type,
});

const generateStarted = () => ({
  type: CITY_LIST_DOWLOADING_START,
});

const generateSeccessed = () => ({
  type: CITY_LIST_DOWLOADING_SUCCESSED,
});

const generateError = (error) => ({
  type: CITY_LIST_LOADING_ERROR,
  error,
});

const setCities = (cities) => ({
  type: CITY_LIST_ADD_CITIES,
  cities,
});

const generateCityList = () => (dispatch) => {
  dispatch(generateStarted());
  getAllCities()
    .then((res) => {
      dispatch(generateSeccessed());
      dispatch(setCities(res));
    })
    .catch((err) => {
      dispatch(generateError(err));
    });
};

export { generateCityList, changeFilter };
