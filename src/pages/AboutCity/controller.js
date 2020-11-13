/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';

import { bool, object } from 'prop-types';
import View from './view';

const Controller = ({ city, isLoading }) => {
  const [activeElements, setActiveElements] = useState([]);
  const [currentCity, setCurrentCity] = useState([]);
  if (city !== currentCity) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setCurrentCity(city);
  }

  return (
    <View
      city={city}
      isLoading={isLoading}
      activeElements={activeElements}
      setActiveElements={setActiveElements}
    />
  );
};

Controller.propTypes = {
  city: object,
  isLoading: bool,
};

Controller.defaultProps = {
  city: {},
  isLoading: false,
};
export default Controller;
