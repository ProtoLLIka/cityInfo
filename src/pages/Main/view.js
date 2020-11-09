import React, { useEffect } from 'react';
import {
  string, arrayOf, any, func,
} from 'prop-types';

import ContinentCitiesBlock from 'components/General/ContinentCitiesBlock';
import Map from 'components/MainPage/Map';

import styles from './style.css';

const MainPage = ({ allCities, continentName, generateCityList }) => {
  const citiesOnContinent = allCities
    .filter((cities) => cities[0].continent === continentName)
    .flat(1);
  useEffect(() => generateCityList(), []);
  return (
    <div className={styles.mainPageContainer}>
      <Map />
      <div className={styles.citiesBlock}>
        <ContinentCitiesBlock
          cities={citiesOnContinent}
          continentName={continentName}
          nameFilter=""
        />
      </div>
    </div>
  );
};

MainPage.propTypes = {
  allCities: arrayOf(any),
  continentName: string,
  generateCityList: func,
};

MainPage.defaultProps = {
  allCities: [],
  continentName: '',
  generateCityList: () => {},
};

export default MainPage;
