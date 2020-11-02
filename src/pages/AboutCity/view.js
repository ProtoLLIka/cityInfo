/* eslint-disable no-unused-vars */
/* eslint-disable react/no-danger */
import React from 'react';
import { Map, YMaps } from 'react-yandex-maps';
import { bool, object } from 'prop-types';
import { Lines } from 'react-preloaders';
import { Redirect } from 'react-router';

import ChartBlock from 'components/AboutCity/ChartBlock/index';
import NavigationBar from 'components/General/NavigationBar/index';

import './style.css';

const AboutCity = ({ city, isLoading }) => {
  if (city) {
    const {
      titleImg, categoryChart, location, name, summary,
    } = city;

    return (
      <div className="cityPageContainer">
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
              width="100%"
              height="300px"
            />
          </YMaps>
        </div>
        <div className="chartBlock">
          <span className="blockTitle">LIFE QUALITY SCORE</span>
          <ChartBlock data={categoryChart} />
        </div>
      </div>
    );
  }
  return (
    <div className="cityPageContainer">
      <NavigationBar />
    </div>
  );
};

AboutCity.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  city: object,
  isLoading: bool,
};

AboutCity.defaultProps = {
  city: {},
  isLoading: false,
};

export default AboutCity;
