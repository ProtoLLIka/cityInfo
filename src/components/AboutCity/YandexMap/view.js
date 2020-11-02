/* eslint-disable react/no-danger */
import React from 'react';
import { number, objectOf } from 'prop-types';
import { Map, YMaps } from 'react-yandex-maps';

import styles from './style.css';

const YandexMap = ({ location }) => (
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
);

YandexMap.propTypes = {
  location: objectOf(number),
};

YandexMap.defaultProps = {
  location: {},
};

export default YandexMap;
