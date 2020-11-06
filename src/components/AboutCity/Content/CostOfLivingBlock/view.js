/* eslint-disable react/no-array-index-key */
import React from 'react';
import { arrayOf, object } from 'prop-types';

import styles from './style.css';

const CostOfLivingBlock = ({ costOfLiving }) => {
  const costTable = costOfLiving.map(({ label, value }, index) => (
    <tr key={index}>
      <td className={styles.label}>{label}</td>
      <td className={styles.value}>{`${value}$`}</td>
    </tr>
  ));

  return (
    <div className={styles.costOfLivingContainer}>
      <h1 className={styles.blockTitle}>COST OF LIVING</h1>
      <table>
        <tbody>{costTable}</tbody>
      </table>
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
