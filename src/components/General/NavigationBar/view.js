import React from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';

import { ALL } from 'consts/consts';

import './style.css';

const clickHandler = (generateCityList, changeFilter) => {
  changeFilter(ALL);
  generateCityList();
};

const NavigationBar = ({ generateCityList, changeFilter }) => (
  <div className="container">
    <span className="allCitiesBtn">
      <Link
        to="/all"
        className="link"
        onClick={() => {
          clickHandler(generateCityList, changeFilter);
        }}
      >
        All cities
      </Link>
    </span>
    <Link
      to="/main"
      className="link logo"
      onClick={() => {
        clickHandler(generateCityList, changeFilter);
      }}
    >
      LOGO HERE!
    </Link>
    <input />
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
