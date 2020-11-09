/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { isMobile } from 'react-device-detect';
import { arrayOf, object } from 'prop-types';

import ClimateInfo from 'components/AboutCity/Content/ClimateInfo';
import sun from 'assets/sun.svg';
import snowflake from 'assets/snowflake.svg';
import radiation from 'assets/radiation.svg';
import fire from 'assets/fire.svg';

import { CLIMATE_ANCHOR } from 'consts/anchorsNames';

import styles from './style.css';

const labels = {
  'Average day length (hours)': 'dayLength',
  'Average number of rainy days per year': 'rainyDays',
  'Average high temperature (Celsius)': 'highTemp',
  'Average low temperature (Celsius)': 'lowTemp',
  'Average daily solar radiation (Mj/m²)': 'solarRad',
  'Weather type': 'weatherType',
};

const ClimateBlock = ({ climate: { data } }) => {
  const climateData = data.reduce(
    (prev, currentItem) => ({
      ...prev,
      [labels[currentItem.label]]: currentItem,
    }),
    {},
  );

  return (
    <div className={`${isMobile ? styles.mobileContainer : styles.container}`} id={CLIMATE_ANCHOR}>
      <span className={styles.blockTitle}>CLIMATE</span>
      <ClimateInfo
        label={climateData.dayLength.label}
        value={climateData.dayLength.value.toString()}
        icon={sun}
      />
      <ClimateInfo
        label={climateData.solarRad.label}
        value={climateData.solarRad.value.toString()}
        icon={radiation}
      />
      <ClimateInfo
        label={climateData.highTemp.label}
        value={climateData.highTemp.value.toString()}
        icon={fire}
      />
      <ClimateInfo
        label={climateData.lowTemp.label}
        value={climateData.lowTemp.value.toString()}
        icon={snowflake}
      />
      <h1 className={styles.infoName}>{climateData.weatherType.label}</h1>
      <span>{climateData.weatherType.value}</span>
    </div>
  );
};

ClimateBlock.propTypes = {
  climate: object,
};

ClimateBlock.defaultProps = {
  climate: {},
};

export default ClimateBlock;
