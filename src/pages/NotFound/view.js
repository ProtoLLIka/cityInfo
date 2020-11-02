import React from 'react';

import logo from 'assets/404.png';

import styles from './style.css';

const Page404 = () => (
  <div className={styles.container404}>
    <img src={logo} alt="404\nPAGE NOT FOUND" />
  </div>
);

export default Page404;
