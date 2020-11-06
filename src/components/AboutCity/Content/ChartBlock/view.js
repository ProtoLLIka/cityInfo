/* eslint-disable react/no-array-index-key */
import React from 'react';
import { arrayOf, any } from 'prop-types';

import ChartLine from 'components/AboutCity/Content/ChartBlock/ChartLine/';
import styles from './style.css';

const ChartBlock = ({ chartData }) => {
  const linesArray = chartData.map(({ score_out_of_10: scoreOutOfTen, ...restProps }, index) => (
    <ChartLine {...restProps} value={scoreOutOfTen} key={index} />
  ));

  return (
    <div className={styles.chartBlock}>
      <span className={styles.blockTitle}>LIFE QUALITY SCORE</span>
      {linesArray}
    </div>
  );
};

ChartBlock.propTypes = {
  chartData: arrayOf(any),
};

ChartBlock.defaultProps = {
  chartData: [],
};

export default ChartBlock;
