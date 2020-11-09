/* eslint-disable no-param-reassign */
import {
  any, arrayOf, func, string,
} from 'prop-types';
import React from 'react';

import NavSearchList from 'components/General/NavSearchList';

import styles from './style.css';

const NavSearchField = ({ allCitites, searchText, setSearchText }) => (
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
          event.target.value = '';
          setSearchText('');
        }, 500);
      }}
    />
    <NavSearchList allCitites={allCitites} searchText={searchText} />
  </div>
);

NavSearchField.propTypes = {
  allCitites: arrayOf(any),
  searchText: string,
  setSearchText: func,
};

NavSearchField.defaultProps = {
  allCitites: [],
  searchText: '',
  setSearchText: () => {},
};

export default NavSearchField;
