/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { arrayOf, object } from 'prop-types';

import styles from './style.css';

const CostOfLivingBlock = ({ costOfLiving }) => {
  const costTable = costOfLiving.map((livingPostion) => (
    <tr>
      <td className={styles.label}>{livingPostion.label}</td>
      <td className={styles.value}>{`${livingPostion.value}$`}</td>
    </tr>
  ));

  return (
    <div className={styles.costOfLivingContainer}>
      <h1 className={styles.blockTitle}>COST OF LIVING</h1>
      <table>{costTable}</table>
    </div>
  );
};

CostOfLivingBlock.propTypes = {
  costOfLiving: arrayOf(object),
};

CostOfLivingBlock.defaultProps = {
  costOfLiving: [],
};

export default CostOfLivingBlock;
