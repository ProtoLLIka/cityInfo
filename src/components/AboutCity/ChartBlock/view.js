import React from 'react';
import { arrayOf, any } from 'prop-types';

import ChartLine from 'components/AboutCity/ChartLine/index';
import styles from './style.css';

const ChartBlock = ({ chartData }) => (
  <div className={styles.chartBlock}>
    <span className={styles.blockTitle}>LIFE QUALITY SCORE</span>
    {chartData.map(({ score_out_of_10: scoreOutOfTen, ...restProps }) => (
      <ChartLine {...restProps} value={scoreOutOfTen} />
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
