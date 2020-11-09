import {
  any, arrayOf, func, string,
} from 'prop-types';
import React from 'react';
import View from './view';

const Controller = ({ allCitites, getCity, searchText }) => {
  if (!searchText) {
    return null;
  }

  const nameFilter = searchText.toLowerCase();
  const filteredCities = allCitites.filter(({ name }) => name.toLowerCase().includes(nameFilter));

  return <View cities={filteredCities} getCity={getCity} />;
};

Controller.propTypes = {
  allCitites: arrayOf(any),
  getCity: func,
  searchText: string,
};

Controller.defaultProps = {
  allCitites: [],
  getCity: () => {},
  searchText: '',
};

export default Controller;
