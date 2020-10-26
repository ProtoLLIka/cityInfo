import googleMapReact from 'google-map-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchCity } from '../../store/reducers/city/utils';
import ChartBlock from './chartBlock';
import { Map, YMaps } from 'react-yandex-maps';
import './cityPage.css';

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
    const { city } = currentCity;
    const {
      city: { titleImg, categoryChart, location, name, population, summary },
    } = currentCity;
    return (
      <div className="cityPageContainer">
        {/* <img src={titleImg} className="titleImg" alt="Title Image"></img> */}
        <div className="titleImg" style={{ backgroundImage: `url(${titleImg})` }}></div>
        <div className="cityName">
          <span>{name.toUpperCase()}</span>
        </div>

        <span dangerouslySetInnerHTML={{ __html: summary }}></span>
        <ChartBlock data={categoryChart} />

        <YMaps>
          <div>
            <Map defaultState={{ center: [location.lat, location.lng], zoom: 9 }} />
          </div>
        </YMaps>
      </div>
    );
  }
  return <div></div>;
};

export default CityPage;
