/* eslint-disable no-unused-vars */
import React from 'react';
import { arrayOf, object } from 'prop-types';

import ClimateInfo from 'components/AboutCity/Content/ClimateBlock/ClimateInfo';
import sun from 'assets/sun.svg';
import snowflake from 'assets/snowflake.svg';
import radiation from 'assets/radiation.svg';
import fire from 'assets/fire.svg';

import styles from './style.css';

const ClimateBlock = ({ climate }) => {
  const dayLength = climate.find(({ label }) => label === 'Average day length (hours)');
  const rainyDays = climate.find(({ label }) => label === 'Average number of rainy days per year');
  const highTemp = climate.find(({ label }) => label === 'Average high temperature (Celsius)');
  const lowTemp = climate.find(({ label }) => label === 'Average low temperature (Celsius)');
  const solarRad = climate.find(({ label }) => label === 'Average daily solar radiation (Mj/m²)');
  const weatherType = climate.find(({ label }) => label === 'Weather type');

  return (
    <div className={styles.climateContainer}>
      <span className={styles.blockTitle}>CLIMATE</span>
      <ClimateInfo label={dayLength.label} value={dayLength.value.toString()} icon={sun} />
      <ClimateInfo label={solarRad.label} value={solarRad.value.toString()} icon={radiation} />
      <ClimateInfo label={highTemp.label} value={highTemp.value.toString()} icon={fire} />
      <ClimateInfo label={lowTemp.label} value={lowTemp.value.toString()} icon={snowflake} />
      <h1 className={styles.infoName}>{weatherType.label}</h1>
      <span>{weatherType.value}</span>
    </div>
  );
};

ClimateBlock.propTypes = {
  climate: arrayOf(object),
};

ClimateBlock.defaultProps = {
  climate: [],
};

export default ClimateBlock;
