import React from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';

import logo from 'assets/logo.png';

import styles from './style.css';

const NavBarMobile = ({ handleLinkClick }) => (
  <div className={styles.container}>
    <Link to="/all" className={`${styles.link} ${styles.allCitiesBtn}`} onClick={handleLinkClick}>
      All cities
    </Link>
    <Link to="/" className={`${styles.link} ${styles.logo}`} onClick={handleLinkClick}>
      <img className={styles.logo} src={logo} alt="MEDIASOFT" />
    </Link>
  </div>
)

NavBarMobile.propTypes = {
  handleLinkClick: func,
};

NavBarMobile.defaultProps = {
  handleLinkClick: () => {},
};

export default NavBarMobile;
