import React, { useEffect, useState } from 'react';
import { Map, YMaps } from 'react-yandex-maps';
import { string } from 'prop-types';

import { searchCity } from '../../store/reducers/city/utils';
import ChartBlock from './chartBlock';
import NavigationBar from '../General/NavigationBar/index';

import './style.css';

const AboutCity = ({ search }) => {
  const cityName = new URLSearchParams(search).get('city');
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
      city: {
        titleImg, categoryChart, location, name, summary,
      },
    } = currentCity;
    const state = { width: '100%', height: '300px' };
    return (
      <div className="cityPageContainer">
        {/* <img src={titleImg} className="titleImg" alt="Title Image"></img> */}
        <NavigationBar />
        <div className="titleImg" style={{ backgroundImage: `url(${titleImg})` }} />
        <div className="cityName">
          <span>{name.toUpperCase()}</span>
        </div>
        <div className="summaryBlock">
          <span className="blockTitle">
            QUALITY OF LIFE IN
            {name.toUpperCase()}
          </span>
          <span dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
        <div className="yandexMap">
          <span className="blockTitle">LOCATION</span>
          <YMaps>
            <Map
              defaultState={{ center: [location.lat, location.lng], zoom: 9 }}
              width={state.width}
              height={state.height}
            />
          </YMaps>
        </div>
        <div className="chartBlock">
          <span className="blockTitle">LIFE QUALITY SCORE</span>
          <ChartBlock data={categoryChart} />
        </div>
        {' '}
      </div>
    );
  }
  return <div />;
};

AboutCity.propTypes = {
  search: string,
};

AboutCity.defaultProps = {
  search: '',
};

export default AboutCity;
