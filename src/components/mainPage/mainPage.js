import React from 'react';
import NavigationBar from '../general/navigationBar';
import './styles/mainPage.css';
import Map from './map/map';
const MainPage = () => {
  return (
    <div style={{ backgroundColor: '#9bb3ba' }}>
      <NavigationBar />
      <Map />
      {/* <img src={pic} className="map" alt="map"></img> */}
    </div>
  );
};

export default MainPage;
