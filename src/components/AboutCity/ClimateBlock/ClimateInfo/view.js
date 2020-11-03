/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { string } from 'prop-types';

import styles from './style.css';

const ClimatInfo = ({ label, value, icon }) => (
  <div className={styles.infoBlock}>
    <h1 className={styles.infoName}>{label}</h1>
    <img className={styles.icon} src={icon} alt={icon} />
    <span className={styles.value}>{value}</span>
  </div>
);

ClimatInfo.propTypes = {
  label: string,
  value: string,
  icon: string,
};

ClimatInfo.defaultProps = {
  label: '',
  value: '',
  icon: '',
};

export default ClimatInfo;
