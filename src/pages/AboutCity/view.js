/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {
  any, arrayOf, bool, object,
} from 'prop-types';
import { isMobile } from 'react-device-detect';

import NavMenu from 'components/AboutCity/NavMenu';
import Summary from 'components/AboutCity/Content/Summary';
import Preloader from 'components/General/Preloader';
import YandexMap from 'components/AboutCity/Content/YandexMap';
import ChartBlock from 'components/AboutCity/Content/ChartBlock';
import TitleOfCity from 'components/AboutCity/TitleOfCity';
import CultureBlock from 'components/AboutCity/Content/CultureBlock';
import ClimateBlock from 'components/AboutCity/Content/ClimateBlock';
import HousingBlock from 'components/AboutCity/Content/HousingBlock';
import CostOfLivingBlock from 'components/AboutCity/Content/CostOfLivingBlock';

import styles from './style.css';

const AboutCity = ({ city, isLoading, activeElements }) => {
  if (!city) {
    return <div className={styles.cityPageContainer} />;
  }

  const {
    titleImg, categoryChart, location, name, summary, details,
  } = city;

  return (
    <div className={styles.cityPageContainer}>
      <Preloader isLoading={isLoading} />
      <TitleOfCity name={name} titleImg={titleImg} />
      <NavMenu activeElements={activeElements} isMobile={isMobile} />
      <Summary name={name} summary={summary} />
      <YandexMap location={location} />
      <CultureBlock culture={details.culture} />
      <ClimateBlock climate={details.climate} />
      <ChartBlock chartData={categoryChart} />
      <CostOfLivingBlock costOfLiving={details.costOfLiving} />
      <HousingBlock housing={details.housing} />
    </div>
  );
};

AboutCity.propTypes = {
  city: object,
  isLoading: bool,
  activeElements: arrayOf(any),
};

AboutCity.defaultProps = {
  city: {},
  isLoading: false,
  activeElements: [],
};

export default AboutCity;
