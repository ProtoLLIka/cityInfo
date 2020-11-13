/* eslint-disable react/no-array-index-key */
import React from 'react';
import { InView } from 'react-intersection-observer';
import { arrayOf, any, func } from 'prop-types';

import ChartLine from 'components/AboutCity/Content/ChartLine';
import { LIFE_QUALITY_ANCHOR } from 'consts/anchorsNames';

import styles from './style.css';

const ChartBlock = ({ chartData, setVisibles, visibles }) => (
  <InView
    onChange={(inView) => {
      if (inView) {
        setVisibles([...visibles, LIFE_QUALITY_ANCHOR]);
      } else {
        setVisibles(visibles.filter((anchor) => anchor !== LIFE_QUALITY_ANCHOR));
      }
    }}
  >
    <div className={styles.chartBlock} id={LIFE_QUALITY_ANCHOR}>
      <span className={styles.blockTitle}>LIFE QUALITY SCORE</span>
      {chartData.map(({ score_out_of_10: scoreOutOfTen, ...restProps }, index) => (
        <ChartLine {...restProps} value={scoreOutOfTen} key={index} />
      ))}
    </div>
  </InView>
);

ChartBlock.propTypes = {
  chartData: arrayOf(any),
  setVisibles: func,
  visibles: arrayOf(any),
};

ChartBlock.defaultProps = {
  chartData: [],
  setVisibles: () => {},
  visibles: [],
};

export default ChartBlock;
