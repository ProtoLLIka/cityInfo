/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
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

const CultureBlock = ({ culture }) => {
  const images = [artGalary, cinema, comedyClub, concertVenue, historicalSite, museum];
  const cultureList = culture.map((culturePlace, index) => (
    <div className={styles.culturePlace}>
      <div className={styles.cultureLabel}>
        <sapn>{culturePlace.label}</sapn>
      </div>
      <div style={{ backgroundImage: `url(${images[index]})` }} className={styles.cultureImg}>
        <sapn className={styles.cultureCount}>{culturePlace.count}</sapn>
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
