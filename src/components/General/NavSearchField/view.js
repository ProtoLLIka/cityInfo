/* eslint-disable react/no-array-index-key */
import { any, arrayOf, func } from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './style.css';

const generateListItems = (allCtites, getCity, searchText) => {
  const filteredCitiesByName = allCtites.filter((city) => {
    const nameFilterLowerCase = searchText.toLowerCase();
    const cityNameLowerCase = city.name.toLowerCase();
    const isNameContains = cityNameLowerCase.includes(nameFilterLowerCase);

    return isNameContains;
  });

  if (filteredCitiesByName.length < 1) {
    return <li className={styles.noCityElement}>No city with this name</li>;
  }

  const listItems = filteredCitiesByName.map(({ name }, index) => (
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
  ));
  return listItems;
};

const NavSearchField = ({ cities, getCity }) => {
  const [searchText, setSearchText] = useState('');
  const allCtites = cities.flat(1);
  const listItems = generateListItems(allCtites, getCity, searchText);
  return (
    <div>
      <input
        className={styles.searchField}
        onChange={(event) => setSearchText(event.target.value)}
        placeholder="Search..."
        onFocus={(event) => {
          event.target.placeholder = '';
        }}
        value={searchText}
        onBlur={(event) => {
          setTimeout(() => {
            event.target.placeholder = 'Search...';
            setSearchText('');
          }, 500);
        }}
      />
      {searchText && (
        <div className={styles.dropdownList}>
          <ul>{listItems}</ul>
        </div>
      )}
    </div>
  );
};

NavSearchField.propTypes = {
  cities: arrayOf(any),
  getCity: func,
};

NavSearchField.defaultProps = {
  cities: [],
  getCity: () => {},
};

export default NavSearchField;
