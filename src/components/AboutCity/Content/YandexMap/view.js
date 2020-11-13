import React from 'react';
import {
  any, arrayOf, func, number, objectOf,
} from 'prop-types';
import { InView } from 'react-intersection-observer';
import { Map, YMaps } from 'react-yandex-maps';

import { LOCATION_ANCHOR } from 'consts/anchorsNames';

import styles from './style.css';

const YandexMap = ({ location: { lat, lng }, setVisibles, visibles }) => (
  <InView
    onChange={(inView) => {
      if (inView) {
        setVisibles([...visibles, LOCATION_ANCHOR]);
      } else {
        setVisibles(visibles.filter((anchor) => anchor !== LOCATION_ANCHOR));
      }
    }}
  >
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
  </InView>
);

YandexMap.propTypes = {
  location: objectOf(number),
  lat: number,
  lng: number,
  setVisibles: func,
  visibles: arrayOf(any),
};

YandexMap.defaultProps = {
  location: {},
  lat: 0,
  lng: 0,
  setVisibles: () => {},
  visibles: [],
};

export default YandexMap;
