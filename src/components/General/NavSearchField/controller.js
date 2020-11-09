import React, { useState } from 'react';
import { any, arrayOf } from 'prop-types';
import View from './view';

const Controller = ({ cities }) => {
  const [searchText, setSearchText] = useState('');
  const allCitites = cities.flat(1);
  return <View allCitites={allCitites} searchText={searchText} setSearchText={setSearchText} />;
};

Controller.propTypes = {
  cities: arrayOf(any),
};

Controller.defaultProps = {
  cities: [],
};

export default Controller;
