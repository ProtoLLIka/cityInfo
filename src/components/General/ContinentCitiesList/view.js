/* eslint-disable react/no-array-index-key */
import { any, arrayOf, func } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.css';

const ContinentCitiesList = ({ getCity, filteredCities }) => {
  if (filteredCities.length <= 0) {
    return null;
  }

  const citiesLinks = filteredCities.map(({ name }, index) => (
    <Link to="/about" key={index} className={styles.link} onClick={() => getCity(name)}>
      {name}
    </Link>
  ));

  return citiesLinks;
};

ContinentCitiesList.propTypes = {
  getCity: func,
  filteredCities: arrayOf(any),
};

ContinentCitiesList.defaultProps = {
  getCity: () => {},
  filteredCities: [],
};

export default ContinentCitiesList;
