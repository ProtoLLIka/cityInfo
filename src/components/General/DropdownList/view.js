import { any, arrayOf } from 'prop-types';
import React from 'react';

import styles from './style.css';

const NavigationBar = ({ cities }) => {
  const a = cities;
  return <div className={styles.dropdownList}>{a}</div>;
};

NavigationBar.propTypes = {
  cities: arrayOf(any),
};

NavigationBar.defaultProps = {
  cities: [],
};

export default NavigationBar;
