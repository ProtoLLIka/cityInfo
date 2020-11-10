/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { object } from 'prop-types';

import { COST_OF_LIVING_ANCHOR } from 'consts/anchorsNames';

import styles from './style.css';

const CostOfLivingBlock = ({ costOfLiving: { data } }) => (
  <div className={styles.container} id={COST_OF_LIVING_ANCHOR}>
    <h1 className={styles.blockTitle}>COST OF LIVING</h1>
    <table>
      <tbody>
        {data.map(({ label, value }, index) => (
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
  costOfLiving: object,
};

CostOfLivingBlock.defaultProps = {
  costOfLiving: {},
};

export default CostOfLivingBlock;
