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
import CostOfLivingBlock from 'components/AboutCity/Content/CostOfLivingBlock';
import isArraysEquals from 'helpers/isArraysEquals';

import {
  COST_OF_LIVING, HOUSING, CULTURE,
} from 'consts/categoryNames';

import { ALL_ANCHORS } from 'consts/anchorsNames';

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
    const elementsIdOfDisplay = ALL_ANCHORS.filter((id) => isElementOnDisplay(id));

    if (isArraysEquals(activeElements, elementsIdOfDisplay)) {
      setActiveElements(elementsIdOfDisplay);
    }
  };

  // TODO observer
  useEffect(() => {
    window.addEventListener('scroll', setElementsOnDisplay);
    setElementsOnDisplay();
    return () => {
      window.removeEventListener('scroll', setElementsOnDisplay);
    };
  });

  if (!city) {
    return <div className={styles.cityPageContainer} />;
  }

  const {
    titleImg, categoryChart, location, name, summary, details,
  } = city;
  const { data: climate } = details.climate;
  const { data: culture } = details.find(({ id }) => id === CULTURE);
  const { data: housing } = details.find(({ id }) => id === HOUSING);
  const { data: costOfLiving } = details.find(({ id }) => id === COST_OF_LIVING);

  return (
    <div className={styles.cityPageContainer}>
      <Preloader isLoading={isLoading} />
      <TitleOfCity name={name} titleImg={titleImg} />
      <NavMenu activeElements={activeElements} />
      <Summary name={name} summary={summary} />
      <YandexMap location={location} />
      <CultureBlock culture={culture} />
      <ClimateBlock climate={climate} />
      <ChartBlock chartData={categoryChart} />
      <HousingBlock housing={housing} />
      <CostOfLivingBlock costOfLiving={costOfLiving} />
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
