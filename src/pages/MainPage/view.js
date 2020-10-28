import React from 'react';

import Map from './Map/Map';
import { getLabels } from '../../components/allCities/allCities';
import { ALL } from './Map/continentTypes';
import NavigationBar from '../../components/General/navigationBar/view';

import './style.css';

const MainPage = ({ state: { cities, filterType } }) => {
  const cityList = cities;
  const filter = filterType === ALL ? '' : filterType;
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
        {filterType !== ALL ? getLabels([...cityList], filterType) : null}
      </div>
      {/* <img src={pic} className="map" alt="map"></img> */}
    </div>
  );
};

export default MainPage;
