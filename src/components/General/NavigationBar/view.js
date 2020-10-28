import React from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';

import { ALL } from '../mainPage/map/continentTypes';

import style from './styles/navigationBar.css';

const NavigationBar = ({ generateCityList, changeFilter }) => (
  <div className={style.container}>
    <span className="allCitiesBtn">
      <Link
        to="/all"
        className="link"
        onClick={() => {
          changeFilter(ALL);
          generateCityList();
        }}
      >
        All cities
      </Link>
    </span>
    <Link
      to="/main"
      className="link logo"
      onClick={() => {
        changeFilter(ALL);
        generateCityList();
      }}
    >
      LOGO HERE!
    </Link>
  </div>
);

NavigationBar.propTypes = {
  generateCityList: func,
  changeFilter: func,
};

NavigationBar.defaultProps = {
  generateCityList: () => {},
  changeFilter: () => {},
};

export default NavigationBar;
