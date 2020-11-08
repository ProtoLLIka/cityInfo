/* eslint-disable react/no-array-index-key */
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Sticky from 'react-sticky-el';
import { arrayOf, string } from 'prop-types';

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

const generateLinks = (activeElements) => {
  const linksArray = ALL_ANCHORS.map((anchor, index) => (
    <AnchorLink href={`#${anchor}`} key={index}>
      <span className={setActivityStyle(anchor, activeElements)}>{anchor.toUpperCase()}</span>
    </AnchorLink>
  ));

  return linksArray;
};

const NavMenu = ({ activeElements }) => (
  <Sticky>
    <div className={styles.navMenu}>{generateLinks(activeElements)}</div>
  </Sticky>
);

NavMenu.propTypes = {
  activeElements: arrayOf(string),
};

NavMenu.defaultProps = {
  activeElements: [],
};

export default NavMenu;
