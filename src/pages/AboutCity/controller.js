/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';

import { bool, object } from 'prop-types';
import View from './view';

// const isElementOnDisplay = (elementId) => {
//   const element = document.getElementById(elementId);

//   if (!element) {
//     return null;
//   }

//   const windowHeight = window.innerHeight;
//   const { top: elementTopPosition } = element.getBoundingClientRect();
//   const onDisplay = elementTopPosition >= 0 && elementTopPosition < windowHeight;

//   return onDisplay;
// };

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

  // const setElementsOnDisplay = () => {
  //   const elementsIdOfDisplay = ALL_ANCHORS.filter((id) => isElementOnDisplay(id));

  //   if (isArraysEquals(activeElements, elementsIdOfDisplay)) {
  //     setActiveElements(elementsIdOfDisplay);
  //   }
  // };
  // // TODO observer
  // useEffect(() => {
  //   window.addEventListener('scroll', setElementsOnDisplay);
  //   setElementsOnDisplay();
  //   return () => {
  //     window.removeEventListener('scroll', setElementsOnDisplay);
  //   };
  // });

  return (
    <View
      city={city}
      isLoading={isLoading}
      activeElements={activeElements}
      setActiveElements={setActiveElements}
    />
  );
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
