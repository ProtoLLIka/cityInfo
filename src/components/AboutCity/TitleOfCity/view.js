import { string } from 'prop-types';
import React from 'react';
import { isMobile } from 'react-device-detect';

import styles from './style.css';

const TitleOfCity = ({ name, titleImg }) => (
  <>
    <div className={styles.titleImg} style={{ backgroundImage: `url(${titleImg})` }} />
    <div className={isMobile ? styles.cityNameMobile : styles.cityName}>
      <span>{name.toUpperCase()}</span>
    </div>
  </>
);

TitleOfCity.propTypes = {
  name: string,
  titleImg: string,
};

TitleOfCity.defaultProps = {
  name: '',
  titleImg: '',
};

export default TitleOfCity;
