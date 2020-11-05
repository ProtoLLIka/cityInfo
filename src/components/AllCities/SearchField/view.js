import React from 'react';

import styles from './style.css';

const SearchField = () => (
  <div className={styles.searchContainer}>
    <input className={styles.search} type="text" placeholder="Search..." />
  </div>
);

export default SearchField;
