import googleMapReact from 'google-map-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchCity } from '../../store/reducers/city/utils';
import ChartBlock from './chartBlock';
import { Map, YMaps } from 'react-yandex-maps';
import './cityPage.css';
import NavigationBar from '../general/navigationBar';

const CityPage = (props) => {
  const cityName = new URLSearchParams(props.location.search).get('city');
  const [currentCity, setCity] = useState(null);

  useEffect(() => {
    const getCity = async () => {
      const city = await searchCity(cityName);
      setCity(city);
    };
    getCity();
  }, []);

  if (currentCity) {
    const {
      city: { titleImg, categoryChart, location, name, population, summary },
    } = currentCity;
    const state = { width: '100%', height: '300px' };
    return (
      <div className="cityPageContainer">
        {/* <img src={titleImg} className="titleImg" alt="Title Image"></img> */}
        <NavigationBar />
        <div className="titleImg" style={{ backgroundImage: `url(${titleImg})` }}></div>
        <div className="cityName">
          <span>{name.toUpperCase()}</span>
        </div>
        <div className="summary">
          <span className="quality">QUALITY OF LIFE IN {name.toUpperCase()}</span>
          <span dangerouslySetInnerHTML={{ __html: summary }}></span>
        </div>
        <div className="yandexMap">
          <YMaps>
            <Map
              defaultState={{ center: [location.lat, location.lng], zoom: 9 }}
              width={state.width}
              height={state.height}
            />
          </YMaps>
        </div>
        <ChartBlock data={categoryChart} />
      </div>
    );
  }
  return <div></div>;
};

export default CityPage;
