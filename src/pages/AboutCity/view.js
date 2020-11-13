/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {
  any, arrayOf, bool, func, object,
} from 'prop-types';

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

const AboutCity = ({
  city, isLoading, activeElements, setActiveElements,
}) => {
  if (!city) {
    return <div className={styles.cityPageContainer} />;
  }
  const {
    titleImg, categoryChart, location, name, summary, details,
  } = city;
  console.log(activeElements);
  return (
    <div className={styles.cityPageContainer}>
      <Preloader isLoading={isLoading} />
      <TitleOfCity name={name} titleImg={titleImg} />
      <NavMenu activeElements={activeElements} />
      <Summary
        name={name}
        summary={summary}
        visibles={activeElements}
        setVisibles={setActiveElements}
      />
      <YandexMap location={location} visibles={activeElements} setVisibles={setActiveElements} />
      <CultureBlock
        culture={details.culture}
        visibles={activeElements}
        setVisibles={setActiveElements}
      />
      <ClimateBlock
        climate={details.climate}
        visibles={activeElements}
        setVisibles={setActiveElements}
      />
      <ChartBlock
        chartData={categoryChart}
        visibles={activeElements}
        setVisibles={setActiveElements}
      />
      <HousingBlock
        housing={details.housing}
        visibles={activeElements}
        setVisibles={setActiveElements}
      />
      <CostOfLivingBlock
        costOfLiving={details.costOfLiving}
        visibles={activeElements}
        setVisibles={setActiveElements}
      />
    </div>
  );
};

AboutCity.propTypes = {
  city: object,
  isLoading: bool,
  activeElements: arrayOf(any),
  setActiveElements: func,
};

AboutCity.defaultProps = {
  city: {},
  isLoading: false,
  activeElements: [],
  setActiveElements: () => {},
};

export default AboutCity;
