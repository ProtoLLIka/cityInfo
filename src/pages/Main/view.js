import React from 'react';
// import { string, arrayOf, any } from 'prop-types';

import Map from 'components/MainPage/Map/';
// import { getLabels } from '/components/allCities/allCities';
import { ALL } from 'consts/consts';
import NavigationBar from 'components/General/NavigationBar/index';
import ContinentCitiesList from 'components/General/ContinentCitiesList/index';

import './style.css';

const MainPage = (state) => {
  const { cities, filterType } = state;
  const cityList = cities;
  const filter = filterType === ALL ? null : filterType;
  console.log(state);
  return (
    <div style={{ backgroundColor: '#9bb3ba' }}>
      <NavigationBar />
      <h1 className="greetingBlock">Choose continent:</h1>
      <Map />
      <div
        className="citiesList"
        style={{
          position: 'absolute',
          top: '950px',
          left: '520px',
          backgroundColor: '#ffffff00',
        }}
      >
        <p>{cityList}</p>
        <p>{filter}</p>
        <ContinentCitiesList />
        {/* {filterType !== ALL ? getLabels([...cityList], filter) : null} */}
      </div>
      {/* <img src={pic} className="map" alt="map"></img> */}
    </div>
  );
};

// MainPage.propTypes = {
//   cities: arrayOf(any),
//   filterType: string,
// };

// MainPage.defaultProps = {
//   cities: [],
//   filterType: '',
// };

export default MainPage;
