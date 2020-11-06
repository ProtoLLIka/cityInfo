/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  any, arrayOf, func, string,
} from 'prop-types';

import styles from './style.css';

const generateCitiesLinks = (cities, nameFilter, getCity) => {
  const citiesLinks = filteredCitiesByName.map(({ name }, index) => (
    <Link to="/about" key={index} className={styles.link} onClick={() => getCity(name)}>
      {name}
    </Link>
  ));

  return citiesLinks;
};

const ContinentCitiesList = ({
  cities, continentName, nameFilter, getCity,
}) => {
  const filteredCitiesByName = cities.filter((city) => {
    const nameFilterLowerCase = nameFilter.toLowerCase();
    const cityNameLowerCase = city.name.toLowerCase();
    const isNameContains = cityNameLowerCase.includes(nameFilterLowerCase);

    return isNameContains;
  });

  if (filteredCitiesByName.length === 0) {
    return null;
  }
  const citiesLinks = generateCitiesLinks(cities, nameFilter, getCity);
  const block = (
    <div className={styles.cititesBlock}>
      <h1>{continentName}</h1>
      <div className={styles.cititesList}>{citiesLinks}</div>
    </div>
  );
  const element = citiesLinks.length > 0 ? block : null;

  return element;
};

ContinentCitiesList.propTypes = {
  continentName: string,
  cities: arrayOf(any),
  nameFilter: string,
  getCity: func,
};

ContinentCitiesList.defaultProps = {
  continentName: '',
  cities: [],
  nameFilter: '',
  getCity: () => {},
};

export default ContinentCitiesList;
