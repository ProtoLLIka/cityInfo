/* eslint-disable react/no-array-index-key */
import { any, arrayOf, func } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.css';

const NavSearchList = ({ cities, getCity }) => {
  if (cities.length < 1) {
    return (
      <div className={styles.dropdownList}>
        <ul>
          <li className={styles.noCityElement}>No city with this name</li>
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.dropdownList}>
      <ul>
        {cities.map(({ name }, index) => (
          <li key={index} className={styles.listElement}>
            <Link
              to="/about"
              key={index}
              className={`${styles.listElement} ${styles.link}`}
              onClick={() => getCity(name)}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

NavSearchList.propTypes = {
  cities: arrayOf(any),
  getCity: func,
};

NavSearchList.defaultProps = {
  cities: [],
  getCity: () => {},
};

export default NavSearchList;
