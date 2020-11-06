import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Sticky from 'react-sticky-el';

import styles from './style.css';

const NavMenu = () => (
  <Sticky>
    <div className={styles.navMenu}>
      <AnchorLink href="#quality">QUALITY</AnchorLink>
      <AnchorLink href="#location">LOCATION</AnchorLink>
      <AnchorLink href="#culture">CULTURE</AnchorLink>
      <AnchorLink href="#climate">CLIMATE</AnchorLink>
      <AnchorLink href="#lifeQuality">LIFE QUALITY</AnchorLink>
      <AnchorLink href="#housing">HOUSING</AnchorLink>
      <AnchorLink href="#costOfLiving">COST OF LIVING</AnchorLink>
    </div>
  </Sticky>
);

export default NavMenu;
