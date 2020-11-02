/* eslint-disable no-unused-vars */
/* eslint-disable react/no-danger */
import React from 'react';
import { Map, YMaps } from 'react-yandex-maps';
import { bool, object } from 'prop-types';
import { Lines } from 'react-preloaders';
import { Redirect } from 'react-router';

import ChartBlock from 'components/AboutCity/ChartBlock/index';
import NavigationBar from 'components/General/NavigationBar/index';

import styles from './style.css';

const AboutCity = ({ city, isLoading }) => {
  if (city) {
    const {
      titleImg, categoryChart, location, name, summary,
    } = city;

    return (
      <div className={styles.cityPageContainer}>
        <NavigationBar />
        <div className={styles.titleImg} style={{ backgroundImage: `url(${titleImg})` }} />
        <div className={styles.cityName}>
          <span>{name.toUpperCase()}</span>
        </div>
        <div className={styles.summaryBlock}>
          <span className={styles.blockTitle}>
            QUALITY OF LIFE IN
            {name.toUpperCase()}
          </span>
          <span dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
        <div className={styles.yandexMap}>
          <span className={styles.blockTitle}>LOCATION</span>
          <YMaps>
            <Map
              defaultState={{ center: [location.lat, location.lng], zoom: 9 }}
              width="100%"
              height="300px"
            />
          </YMaps>
        </div>
        <div className={styles.chartBlock}>
          <span className={styles.blockTitle}>LIFE QUALITY SCORE</span>
          <ChartBlock data={categoryChart} />
        </div>
      </div>
    );
  }
  return (
    <div className={styles.cityPageContainer}>
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
