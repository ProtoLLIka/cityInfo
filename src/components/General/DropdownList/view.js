/* eslint-disable react/no-array-index-key */
import { any, arrayOf, func } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.css';

const generateListItems = (allCtites, getCity) => {
  const listItems = allCtites.map(({ name }, index) => (
    <li key={index}>
      <Link
        to="/about"
        key={index}
        className={`${styles.listElement} ${styles.link}`}
        onClick={() => getCity(name)}
      >
        {name}
      </Link>
    </li>
  ));
  return listItems;
};

const DropdownList = ({ cities, getCity }) => {
  const allCtites = cities.flat(1);
  const listItems = generateListItems(allCtites, getCity);
  return (
    <div className={styles.dropdownList}>
      <ul>{listItems}</ul>
    </div>
  );
};

DropdownList.propTypes = {
  cities: arrayOf(any),
  getCity: func,
};

DropdownList.defaultProps = {
  cities: [],
  getCity: () => {},
};

export default DropdownList;
