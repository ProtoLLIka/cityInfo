import React from 'react';
import { string, arrayOf, any } from 'prop-types';

import Map from 'components/MainPage/Map/index';
// import { getLabels } from '/components/allCities/allCities';
import NavigationBar from 'components/General/NavigationBar/index';
import ContinentCitiesList from 'components/General/ContinentCitiesList/index';

import './style.css';

const MainPage = ({ allCities, continentName }) => {
  const citiesOnContinent = allCities
    .filter((cities) => cities[0].continent === continentName)
    .flat(1);
  return (
    <div style={{ backgroundColor: '#9bb3ba' }}>
      <NavigationBar />
      <h1 className="greetingBlock">Choose continent:</h1>
      <Map />
      <div className="citiesBlock">
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
