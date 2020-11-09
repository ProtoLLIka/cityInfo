import React from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';

import NavSearchField from 'components/General/NavSearchField';
import logo from 'assets/logo.png';
import { ALL } from 'consts/continentNames';

import styles from './style.css';

const handleClick = (generateCityList, changeFilter) => {
  changeFilter(ALL);
  generateCityList();
};

const BrowserNavBar = ({ generateCityList, changeFilter }) => {
  const handleLinkClick = () => {
    handleClick(generateCityList, changeFilter);
  };

  return (
    <div className={styles.container}>
      <Link to="/all" className={`${styles.link} ${styles.allCitiesBtn}`} onClick={handleLinkClick}>
        All cities
      </Link>
      <Link to="/" className={`${styles.link} ${styles.logo}`} onClick={handleLinkClick}>
        <img className={styles.logo} src={logo} alt="MEDIASOFT" />
      </Link>
      <NavSearchField />
    </div>
  );
};

BrowserNavBar.propTypes = {
  generateCityList: func,
  changeFilter: func,
};

BrowserNavBar.defaultProps = {
  generateCityList: () => {},
  changeFilter: () => {},
};

export default BrowserNavBar;
