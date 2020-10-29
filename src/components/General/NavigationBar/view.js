import React from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';

import { ALL } from 'consts/consts';

import './style.css';

const NavigationBar = ({ generateCityList, changeFilter }) => (
  <div className="container">
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
