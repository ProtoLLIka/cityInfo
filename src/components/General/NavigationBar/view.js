import React from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';

import { ALL } from 'consts/consts';

import styles from './style.css';

const clickHandler = (generateCityList, changeFilter) => {
  changeFilter(ALL);
  generateCityList();
};

const NavigationBar = ({ generateCityList, changeFilter }) => (
  <div className={styles.container}>
    <Link
      to="/all"
      className={`${styles.link} ${styles.allCitiesBtn}`}
      onClick={() => {
        clickHandler(generateCityList, changeFilter);
      }}
    >
      All cities
    </Link>
    <Link
      to="/"
      className={`${styles.link} ${styles.logo}`}
      onClick={() => {
        clickHandler(generateCityList, changeFilter);
      }}
    >
      LOGO HERE!
    </Link>
    <input className={styles.searchField} />
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
