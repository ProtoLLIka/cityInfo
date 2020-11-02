import React from 'react';
import { string, arrayOf, any } from 'prop-types';

import Map from 'components/MainPage/Map/index';
import NavigationBar from 'components/General/NavigationBar/index';
import ContinentCitiesList from 'components/General/ContinentCitiesList/index';

import styles from './style.css';

const MainPage = ({ allCities, continentName }) => {
  const citiesOnContinent = allCities
    .filter((cities) => cities[0].continent === continentName)
    .flat(1);

  return (
    <div className={styles.mainPageContainer}>
      <NavigationBar />
      <h1 className={styles.greetingBlock}>Choose continent:</h1>
      <Map />
      <div className={styles.citiesBlock}>
        <ContinentCitiesList
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
};

MainPage.defaultProps = {
  allCities: [],
  continentName: '',
};

export default MainPage;
