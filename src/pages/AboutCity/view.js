/* eslint-disable no-unused-vars */
/* eslint-disable react/no-danger */
import React from 'react';
import { bool, object } from 'prop-types';

import ChartBlock from 'components/AboutCity/ChartBlock/index';
import NavigationBar from 'components/General/NavigationBar/index';
import TitleOfCity from 'components/AboutCity/TitleOfCity/index';
import Summary from 'components/AboutCity/Summary/index';
import YandexMap from 'components/AboutCity/YandexMap/index';

import styles from './style.css';

const AboutCity = ({ city, isLoading }) => {
  if (city) {
    const {
      titleImg, categoryChart, location, name, summary,
    } = city;
    return (
      <div className={styles.cityPageContainer}>
        <NavigationBar />
        <TitleOfCity name={name} titleImg={titleImg} />
        <Summary name={name} summary={summary} />
        <YandexMap location={location} />
        <ChartBlock chartData={categoryChart} />
      </div>
    );
  }

  return (
    <div className={styles.cityPageContainer}>
      <NavigationBar />
    </div>
  );
};

AboutCity.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  city: object,
  isLoading: bool,
};

AboutCity.defaultProps = {
  city: {},
  isLoading: false,
};

export default AboutCity;
