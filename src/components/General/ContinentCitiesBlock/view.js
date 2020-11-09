/* eslint-disable react/no-array-index-key */
import React from 'react';
import { any, arrayOf, string } from 'prop-types';

import ContinentCitiesList from 'components/General/ContinentCitiesList';

import styles from './style.css';

const ContinentCitiesBlock = ({ cities, continentName, nameFilter }) => {
  const nameFilterLow = nameFilter.toLowerCase();
  const filteredCities = cities.filter(({ name }) => name.toLowerCase().includes(nameFilterLow));

  if (filteredCities.length === 0) {
    return null;
  }

  return (
    <div className={styles.cititesBlock}>
      <h1>{continentName}</h1>
      <div className={styles.cititesList}>
        <ContinentCitiesList filteredCities={filteredCities} />
      </div>
    </div>
  );
};

ContinentCitiesBlock.propTypes = {
  continentName: string,
  cities: arrayOf(any),
  nameFilter: string,
};

ContinentCitiesBlock.defaultProps = {
  continentName: '',
  cities: [],
  nameFilter: '',
};

export default ContinentCitiesBlock;
