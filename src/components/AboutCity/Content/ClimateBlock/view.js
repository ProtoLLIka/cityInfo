/* eslint-disable no-unused-vars */
import React from 'react';
import { arrayOf, object } from 'prop-types';

import ClimateInfo from 'components/AboutCity/Content/ClimateInfo';
import sun from 'assets/sun.svg';
import snowflake from 'assets/snowflake.svg';
import radiation from 'assets/radiation.svg';
import fire from 'assets/fire.svg';

import styles from './style.css';

const labels = {
  'Average day length (hours)': 'dayLength',
  'Average number of rainy days per year': 'rainyDays',
  'Average high temperature (Celsius)': 'highTemp',
  'Average low temperature (Celsius)': 'lowTemp',
  'Average daily solar radiation (Mj/m²)': 'solarRad',
  'Weather type': 'weatherType',
};

const ClimateBlock = ({ climate }) => {
  const data = climate.reduce(
    (prev, currentItem) => ({
      ...prev,
      [labels[currentItem.label]]: currentItem,
    }),
    {},
  );

  return (
    <div className={styles.climateContainer}>
      <span className={styles.blockTitle}>CLIMATE</span>
      <ClimateInfo
        label={data.dayLength.label}
        value={data.dayLength.value.toString()}
        icon={sun}
      />
      <ClimateInfo
        label={data.solarRad.label}
        value={data.solarRad.value.toString()}
        icon={radiation}
      />
      <ClimateInfo label={data.highTemp.label} value={data.highTemp.value.toString()} icon={fire} />
      <ClimateInfo
        label={data.lowTemp.label}
        value={data.lowTemp.value.toString()}
        icon={snowflake}
      />
      <h1 className={styles.infoName}>{data.weatherType.label}</h1>
      <span>{data.weatherType.value}</span>
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
