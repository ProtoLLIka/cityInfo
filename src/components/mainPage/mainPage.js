import React from 'react';
import NavigationBar from '../general/navigationBar';
import pic from '../../assets/continentMap.svg';
import './style.css';
const MainPage = () => {
  return (
    <div>
      <NavigationBar />
      <img src={pic} className="map" alt="map"></img>
    </div>
  );
};

export default MainPage;
