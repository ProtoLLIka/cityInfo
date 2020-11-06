import React from 'react';
import { number, string } from 'prop-types';

import styles from './style.css';

const ChartLine = ({ value, color, name }) => (
  <div className={styles.lineBlock}>
    <div className={styles.nameBlock}>
      <h1 className={styles.lineName}>{name}</h1>
    </div>
    <div className={styles.progressBar}>
      <div className={styles.filler} style={{ width: `${value * 10}%`, background: `${color}` }} />
    </div>
    <span className={styles.scoreLabel}>{`${Math.floor(value)}/10`}</span>
  </div>
);

ChartLine.propTypes = {
  value: number,
  color: string,
  name: string,
};

ChartLine.defaultProps = {
  value: 0,
  color: '',
  name: '',
};

export default ChartLine;
