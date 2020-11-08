/* eslint-disable react/no-array-index-key */
import React from 'react';
import { arrayOf, object } from 'prop-types';

import { costOfLivingAnchor } from 'consts/anchorsNames';

import styles from './style.css';

const CostOfLivingBlock = ({ costOfLiving }) => (
  <div className={styles.costOfLivingContainer} id={costOfLivingAnchor}>
    <h1 className={styles.blockTitle}>COST OF LIVING</h1>
    <table>
      <tbody>
        {costOfLiving.map(({ label, value }, index) => (
          <tr key={index}>
            <td className={styles.label}>{label}</td>
            <td className={styles.value}>{`${value}$`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

CostOfLivingBlock.propTypes = {
  costOfLiving: arrayOf(object),
};

CostOfLivingBlock.defaultProps = {
  costOfLiving: [],
};

export default CostOfLivingBlock;
