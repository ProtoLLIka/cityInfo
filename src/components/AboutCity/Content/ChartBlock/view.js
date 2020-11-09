/* eslint-disable react/no-array-index-key */
import React from 'react';
import { arrayOf, any } from 'prop-types';

import ChartLine from 'components/AboutCity/Content/ChartLine';
import { LIFE_QUALITY_ANCHOR } from 'consts/anchorsNames';

import styles from './style.css';

const ChartBlock = ({ chartData }) => (
  <div className={styles.chartBlock} id={LIFE_QUALITY_ANCHOR}>
    <span className={styles.blockTitle}>LIFE QUALITY SCORE</span>
    {chartData.map(({ score_out_of_10: scoreOutOfTen, ...restProps }, index) => (
      <ChartLine {...restProps} value={scoreOutOfTen} key={index} />
    ))}
  </div>
);

ChartBlock.propTypes = {
  chartData: arrayOf(any),
};

ChartBlock.defaultProps = {
  chartData: [],
};

export default ChartBlock;
