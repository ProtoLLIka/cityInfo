import React from 'react';
import { number, objectOf } from 'prop-types';
import { Map, YMaps } from 'react-yandex-maps';

import { LOCATION_ANCHOR } from 'consts/anchorsNames';

import styles from './style.css';

const YandexMap = ({ location: { lat, lng } }) => (
  <div className={styles.yandexMap} id={LOCATION_ANCHOR}>
    <span className={styles.blockTitle}>LOCATION</span>
    <YMaps>
      <Map
        key={`${lat}${lng}`}
        defaultState={{ center: [lat, lng], zoom: 9 }}
        width="100%"
        height="300px"
      />
    </YMaps>
  </div>
);

YandexMap.propTypes = {
  location: objectOf(number),
  lat: number,
  lng: number,
};

YandexMap.defaultProps = {
  location: {},
  lat: 0,
  lng: 0,
};

export default YandexMap;
