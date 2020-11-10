/* eslint-disable react/no-array-index-key */
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Sticky from 'react-sticky-el';
import { arrayOf, bool, string } from 'prop-types';

import { ALL_ANCHORS } from 'consts/anchorsNames';

import styles from './style.css';

const setActivityStyle = (anchorName, activeElements) => {
  if (!anchorName) {
    return styles.inactive;
  }

  const isActive = activeElements.includes(anchorName);
  const style = isActive ? styles.active : styles.inactive;
  return style;
};

const NavMenu = ({ activeElements, isMobile }) => {
  if (isMobile) {
    return null;
  }

  return (
    <Sticky>
      <div className={styles.navMenu}>
        {ALL_ANCHORS.map((anchor, index) => (
          <AnchorLink href={`#${anchor}`} key={index}>
            <span className={setActivityStyle(anchor, activeElements)}>{anchor.toUpperCase()}</span>
          </AnchorLink>
        ))}
      </div>
    </Sticky>
  );
};

NavMenu.propTypes = {
  activeElements: arrayOf(string),
  isMobile: bool,
};

NavMenu.defaultProps = {
  activeElements: [],
  isMobile: false,
};

export default NavMenu;
