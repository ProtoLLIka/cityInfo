/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { arrayOf, any, func } from 'prop-types';
import Sticky from 'react-sticky-el';

import ContinentCitiesBlock from 'components/General/ContinentCitiesBlock';

import styles from './style.css';

const AllCities = ({ cities, generateCityList }) => {
  useEffect(() => generateCityList(), []);

  const [nameFilter, setNameFilter] = useState('');

  return (
    <div className={styles.allCitiesPage}>
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
      <div className={styles.citiesList}>
        {cities.map((cititesOnContinent, index) => {
          const [firstCity] = cititesOnContinent;
          return (
            <ContinentCitiesBlock
              cities={cititesOnContinent}
              continentName={firstCity.continent}
              key={index}
              nameFilter={nameFilter}
            />
          );
        })}
      </div>
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
