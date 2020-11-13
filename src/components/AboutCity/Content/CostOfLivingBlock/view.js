/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { InView } from 'react-intersection-observer';
import {
  any, arrayOf, func, object,
} from 'prop-types';

import { COST_OF_LIVING_ANCHOR } from 'consts/anchorsNames';

import styles from './style.css';

const CostOfLivingBlock = ({ costOfLiving: { data }, setVisibles, visibles }) => (
  <InView
    onChange={(inView) => {
      if (inView) {
        setVisibles([...visibles, COST_OF_LIVING_ANCHOR]);
      } else {
        setVisibles(visibles.filter((anchor) => anchor !== COST_OF_LIVING_ANCHOR));
      }
    }}
  >
    <div className={styles.costOfLivingContainer} id={COST_OF_LIVING_ANCHOR}>
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
  </InView>
);

CostOfLivingBlock.propTypes = {
  costOfLiving: object,
  setVisibles: func,
  visibles: arrayOf(any),
};

CostOfLivingBlock.defaultProps = {
  costOfLiving: {},
  setVisibles: () => {},
  visibles: [],
};

export default CostOfLivingBlock;
