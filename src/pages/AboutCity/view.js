import React from 'react';
import { bool, object } from 'prop-types';

import ChartBlock from 'components/AboutCity/ChartBlock/index';
import NavigationBar from 'components/General/NavigationBar/index';
import TitleOfCity from 'components/AboutCity/TitleOfCity/index';
import Summary from 'components/AboutCity/Summary/index';
import YandexMap from 'components/AboutCity/YandexMap/index';
import Preloader from 'components/General/Preloader/index';
import ClimateBlock from 'components/AboutCity/ClimateBlock/index';
import CultureBlock from 'components/AboutCity/CultureBlock/index';
import HousingBlock from 'components/AboutCity/HousingBlock/index';
import CostOfLivingBlock from 'components/AboutCity/CostOfLivingBlock/index';
import {
  COST_OF_LIVING, HOUSING, CULTURE, CLIMATE,
} from 'consts/consts';

import styles from './style.css';

const AboutCity = ({ city, isLoading }) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  if (city) {
    const {
      titleImg, categoryChart, location, name, summary, details,
    } = city;
    const { data: climate } = details.find(({ id }) => id === CLIMATE);
    const { data: culture } = details.find(({ id }) => id === CULTURE);
    const { data: housing } = details.find(({ id }) => id === HOUSING);
    const { data: costOfLiving } = details.find(({ id }) => id === COST_OF_LIVING);

    return (
      <div className={styles.cityPageContainer}>
        <NavigationBar />
        {isLoading && <Preloader />}
        <TitleOfCity name={name} titleImg={titleImg} />
        <Summary name={name} summary={summary} />
        <YandexMap location={location} />
        <ChartBlock chartData={categoryChart} />
        <ClimateBlock climate={climate} />
        <CultureBlock culture={culture} />
        <HousingBlock housing={housing} />
        <CostOfLivingBlock costOfLiving={costOfLiving} />
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
