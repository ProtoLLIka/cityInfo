import React from 'react';
import Sticky from 'react-sticky-el';

import styles from './style.css';

const NavMenu = () => (
  <Sticky>
    <div className={styles.navMenu}>
      <a href="#QUALITY">QUALITY</a>
      <a href="#LOCATION">LOCATION</a>
      <a href="#CULTURE">CULTURE</a>
      <a href="#CLIMATE">CLIMATE</a>
      <a href="#LIFE_QUALITY">LIFE QUALITY</a>
    </div>
  </Sticky>
);

export default NavMenu;
