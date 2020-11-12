import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import cityList from 'store/reducers/cityList/reducer';
import {
  searchStarted,
  searchSuccessed,
  searchError,
  selectCity,
} from 'store/reducers/city/actions';

import {
  loadingStarted,
  loadingSuccessful,
  loadingError,
  setCities,
} from 'store/reducers/cityList/actions';
import { getAllCities } from 'api/cityList/utils';
import searchCity from 'api/city/utils';
import cityReducer from 'store/reducers/city/reducer';

const middleware = (store) => (next) => (action) => {
  if (action.request) {
    if (action.request.type === 'cityList') {
      store.dispatch(loadingStarted());
      try {
        getAllCities().then((cities) => {
          store.dispatch(loadingSuccessful());
          store.dispatch(setCities(cities));
        });
      } catch (error) {
        store.dispatch(loadingError(error));
      }
    }

    if (action.request.type === 'city') {
      const { cityName } = action.request.requestParams;
      store.dispatch(searchStarted());
      try {
        searchCity(cityName).then(({ city }) => {
          store.dispatch(searchSuccessed());
          store.dispatch(selectCity(city));
        });
      } catch (error) {
        store.dispatch(searchError(error));
      }
    }
    return null;
  }
  return next(action);
};

const reducers = combineReducers({ cityList, city: cityReducer });
const store = createStore(reducers, applyMiddleware(thunk, logger, middleware));

export default store;
