import React from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';

import NavSearchField from 'components/General/NavSearchField';
import { ALL } from 'consts/continentNames';
import logo from 'assets/logo.png';

import styles from './style.css';

const handleClick = (generateCityList, changeFilter) => {
  changeFilter(ALL);
  generateCityList();
};

const NavigationBar = ({ generateCityList, changeFilter }) => {
  const handleLinkClick = () => {
    handleClick(generateCityList, changeFilter);
  }
  return <div className={styles.container}>
    <Link
      to="/all"
      className={`${styles.link} ${styles.allCitiesBtn}`}
      onClick={handleLinkClick}
    >
      All cities
    </Link>
    <Link
      to="/"
      className={`${styles.link} ${styles.logo}`}
      onClick={handleLinkClick}
    >
      <img className={styles.logo} src={logo} alt="MEDIASOFT" />
    </Link>
    <NavSearchField />
  </div>
)};

NavigationBar.propTypes = {
  generateCityList: func,
  changeFilter: func,
};

NavigationBar.defaultProps = {
  generateCityList: () => {},
  changeFilter: () => {},
};

export default NavigationBar;
