/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { any, arrayOf, object } from 'prop-types';
import Slider from '@farbenmeer/react-spring-slider';

import artGalary from 'assets/cultureBlock/artGalary.jpg';
import cinema from 'assets/cultureBlock/cinema.jpg';
import comedyClub from 'assets/cultureBlock/comedyClub.jpg';
import concertVenue from 'assets/cultureBlock/concertVenue.jpg';
import historicalSite from 'assets/cultureBlock/historicalSite.jpg';
import museum from 'assets/cultureBlock/museum.jpg';

import { CULTURE_ANCHOR } from 'consts/anchorsNames';

import styles from './style.css';

const images = [artGalary, cinema, comedyClub, concertVenue, historicalSite, museum];

const CultureBlock = ({ culture: { data } }) => {
  const cultureList = data.map(({ label: culurePlaceLabel, count: culurePlacecount }, index) => (
    <div className={styles.culturePlace} key={index}>
      <div className={styles.cultureLabel}>
        <span>{culurePlaceLabel}</span>
      </div>

      <div style={{ backgroundImage: `url(${images[index]})` }} className={styles.cultureImg}>
        <span className={styles.cultureCount}>{culurePlacecount}</span>
      </div>
    </div>
  ));

  return (
    <div className={styles.container} id={CULTURE_ANCHOR}>
      <h1 className={styles.blockTitle}>CULTURE</h1>
      <Slider auto="3000">{cultureList}</Slider>
    </div>
  );
};

CultureBlock.propTypes = {
  culture: object,
  data: arrayOf(any),
};

CultureBlock.defaultProps = {
  culture: {},
  data: [],
};

export default CultureBlock;
