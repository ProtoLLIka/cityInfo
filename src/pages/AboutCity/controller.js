/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

import { ALL_ANCHORS } from 'consts/anchorsNames';
import isArraysEquals from 'helpers/isArraysEquals';
import { bool, object } from 'prop-types';
import BrowserView from './browserView';

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

const Controller = ({ city, isLoading }) => {
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

  if (isMobile) {
    return <h1>Mobile page</h1>;
  }
  return <BrowserView city={city} isLoading={isLoading} activeElements={activeElements} />;
};

Controller.propTypes = {
  city: object,
  isLoading: bool,
};

Controller.defaultProps = {
  city: {},
  isLoading: false,
};
export default Controller;
