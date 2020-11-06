/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { arrayOf, any, func } from 'prop-types';
import Sticky from 'react-sticky-el';

import NavigationBar from 'components/General/NavigationBar';
import ContinentCitiesList from 'components/General/ContinentCitiesList';

import styles from './style.css';

// TODO
const generateLinksBlocks = (cities, nameFilter) => {
  const citiesBlocks = cities.map((cititesOnContinent, index) => {
    const [firstCity] = cititesOnContinent;
    const cityBlock = (
      <ContinentCitiesList
        cities={cititesOnContinent}
        continentName={continentName}
        key={index}
        nameFilter={nameFilter}
      />
    );

    return cityBlock;
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
