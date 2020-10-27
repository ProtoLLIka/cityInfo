import React from 'react';
import { Link } from 'react-router-dom';

import { TextField } from '@material-ui/core';

import { generateCityList, changeFilter } from '../../store/reducers/cityList/actions';
import { ALL } from '../mainPage/map/continentTypes';

import style from './styles/navigationBar.css';
import Connector from './connector';

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
    <TextField />
  </div>
);

export default Connector(NavigationBar);
