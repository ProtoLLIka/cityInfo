import { ALL } from '../../../components/mainPage/map/continentTypes';
import {
  CITY_LIST_ADD_CITIES,
  CITY_LIST_CHANGE_FILTER_TYPE,
  CITY_LIST_DOWLOADING_START,
  CITY_LIST_DOWLOADING_ERROR,
  CITY_LIST_DOWLOADING_SUCCESSED,
} from './types';
import { getAllCities } from './utils';

const generateCityList = () => {
  return (dispatch) => {
    dispatch(generateStarted());
    getAllCities()
      .then((res) => {
        dispatch(generateSeccessed());
        dispatch(setCities(res));
      })
      .catch((err) => {
        dispatch(generateError());
      });
  };
};

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
const generateError = () => ({
  type: CITY_LIST_DOWLOADING_ERROR,
});
const setCities = (cities) => ({
  type: CITY_LIST_ADD_CITIES,
  cities: cities,
});

export { generateCityList, changeFilter };
