import React from 'react';
import NavigationBar from '../general/navigationBar';
import pic from '../../assets/continentMap.svg';
import './styles/mainPage.css';
import Map from './map/map';
const MainPage = () => {
  return (
    <div>
      <NavigationBar />
      <Map />
      {/* <img src={pic} className="map" alt="map"></img> */}
    </div>
  );
};

export default MainPage;
