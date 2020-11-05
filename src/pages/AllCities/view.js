/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { arrayOf, any, func } from 'prop-types';

import NavigationBar from 'components/General/NavigationBar/index';
import ContinentCitiesList from 'components/General/ContinentCitiesList';
import Sticky from 'react-sticky-el';

import styles from './style.css';

const generateLinksBlocks = (cities, nameFilter) => {
  const citiesBlocks = cities.map((cititesOnContinent, index) => {
    const continentName = cititesOnContinent[0].continent;
    const block = (
      <ContinentCitiesList
        cities={cititesOnContinent}
        continentName={continentName}
        key={index}
        nameFilter={nameFilter}
      />
    );

    return block;
  });

  return citiesBlocks;
};

const AllCities = ({ cities, generateCityList }) => {
  useEffect(() => generateCityList(), []);

  const [nameFilter, setNameFilter] = useState('');

  const listBlocks = generateLinksBlocks(cities, nameFilter);
  return (
    <div className={styles.allCitiesPage}>
      <NavigationBar />
      <Sticky>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.search}
            onChange={(event) => {
              setNameFilter(event.target.value);
            }}
          />
        </div>
      </Sticky>
      <div className={styles.citiesList}>{listBlocks}</div>
    </div>
  );
};

AllCities.propTypes = {
  cities: arrayOf(any),
  generateCityList: func,
};

AllCities.defaultProps = {
  cities: [],
  generateCityList: () => {},
};

export default AllCities;
