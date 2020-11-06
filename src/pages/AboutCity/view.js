/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import { bool, object } from 'prop-types';

import NavMenu from 'components/AboutCity/NavMenu';
import Summary from 'components/AboutCity/Content/Summary';
import Preloader from 'components/General/Preloader';
import YandexMap from 'components/AboutCity/Content/YandexMap';
import ChartBlock from 'components/AboutCity/Content/ChartBlock';
import TitleOfCity from 'components/AboutCity/TitleOfCity';
import CultureBlock from 'components/AboutCity/Content/CultureBlock';
import ClimateBlock from 'components/AboutCity/Content/ClimateBlock';
import HousingBlock from 'components/AboutCity/Content/HousingBlock';
import NavigationBar from 'components/General/NavigationBar';
import CostOfLivingBlock from 'components/AboutCity/Content/CostOfLivingBlock';

import {
  COST_OF_LIVING, HOUSING, CULTURE, CLIMATE,
} from 'consts/categoryNames';

import {
  allAnchors,
  qualityAnchor,
  locationAnchor,
  cultureAnchor,
  climateAnchor,
  lifeQualityAnchor,
  housingAnchor,
  costOfLivingAnchor,
} from 'consts/anchorsNames';

import styles from './style.css';

const isElementOnDisplay = (elementId) => {
  const element = document.getElementById(elementId);

  if (!element) {
    return null;
  }

  const windowHeight = window.innerHeight;
  const { top: elementTopPosition } = element.getBoundingClientRect();
  const onDisplay = elementTopPosition >= 0 && elementTopPosition < windowHeight;

  return onDisplay;
};

const AboutCity = ({ city, isLoading }) => {
  const [activeElements, setActiveElements] = useState([]);
  const [currentCity, setCurrentCity] = useState([]);

  if (city !== currentCity) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setCurrentCity(city);
  }

  const setElementsOnDisplay = () => {
    const elementsIdOfDisplay = allAnchors.filter((id) => isElementOnDisplay(id));

    if (JSON.stringify(activeElements) !== JSON.stringify(elementsIdOfDisplay)) {
      setActiveElements(elementsIdOfDisplay);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setElementsOnDisplay);
    setElementsOnDisplay();
    return () => {
      window.removeEventListener('scroll', setElementsOnDisplay);
    };
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

        <NavMenu activeElements={activeElements} />

        <div id={qualityAnchor}>
          <Summary name={name} summary={summary} />
        </div>

        <div id={locationAnchor}>
          <YandexMap location={location} />
        </div>

        <div id={cultureAnchor}>
          <CultureBlock culture={culture} />
        </div>

        <div id={climateAnchor}>
          <ClimateBlock climate={climate} />
        </div>

        <div id={lifeQualityAnchor}>
          <ChartBlock chartData={categoryChart} />
        </div>

        <div id={housingAnchor}>
          <HousingBlock housing={housing} />
        </div>

        <div id={costOfLivingAnchor}>
          <CostOfLivingBlock costOfLiving={costOfLiving} />
        </div>
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
  city: object,
  isLoading: bool,
};

AboutCity.defaultProps = {
  city: {},
  isLoading: false,
};

export default AboutCity;
