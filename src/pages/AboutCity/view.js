import React from 'react';
import Sticky from 'react-sticky-el';
import { bool, object } from 'prop-types';

import NavMenu from 'components/AboutCity/NavMenu/view';
import Summary from 'components/AboutCity/Content/Summary/index';
import Preloader from 'components/General/Preloader/index';
import YandexMap from 'components/AboutCity/Content/YandexMap/index';
import ChartBlock from 'components/AboutCity/Content/ChartBlock/index';
import TitleOfCity from 'components/AboutCity/TitleOfCity/index';
import CultureBlock from 'components/AboutCity/Content/CultureBlock/index';
import ClimateBlock from 'components/AboutCity/Content/ClimateBlock/index';
import HousingBlock from 'components/AboutCity/Content/HousingBlock/index';
import NavigationBar from 'components/General/NavigationBar/index';
import CostOfLivingBlock from 'components/AboutCity/Content/CostOfLivingBlock/index';

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

        <Sticky>
          <NavMenu />
        </Sticky>

        <Summary name={name} summary={summary} />
        <YandexMap location={location} />
        <CultureBlock culture={culture} />
        <ClimateBlock climate={climate} />
        <ChartBlock chartData={categoryChart} />
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
