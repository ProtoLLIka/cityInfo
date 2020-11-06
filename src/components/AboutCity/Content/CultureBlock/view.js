/* eslint-disable react/no-array-index-key */
import React from 'react';
import { arrayOf, object } from 'prop-types';
import Slider from '@farbenmeer/react-spring-slider';

import artGalary from 'assets/cultureBlock/artGalary.jpg';
import cinema from 'assets/cultureBlock/cinema.jpg';
import comedyClub from 'assets/cultureBlock/comedyClub.jpg';
import concertVenue from 'assets/cultureBlock/concertVenue.jpg';
import historicalSite from 'assets/cultureBlock/historicalSite.jpg';
import museum from 'assets/cultureBlock/museum.jpg';

import styles from './style.css';

const images = [artGalary, cinema, comedyClub, concertVenue, historicalSite, museum];

const CultureBlock = ({ culture }) => {
  const cultureList = culture.map(({ label: culurePlaceLabel, count: culurePlacecount }, index) => (
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
    <div className={styles.cultureContainer}>
      <h1 className={styles.blockTitle}>CULTURE</h1>
      <Slider auto="3000">{cultureList}</Slider>
    </div>
  );
};

CultureBlock.propTypes = {
  culture: arrayOf(object),
};

CultureBlock.defaultProps = {
  culture: [],
};

export default CultureBlock;
