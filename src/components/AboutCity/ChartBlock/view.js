import React from 'react';
import { arrayOf, any } from 'prop-types';

// eslint-disable-next-line import/no-unresolved
import ChartLine from '../ChartLine/index';

const ChartBlock = ({ data }) => (
  <>
    {data.map(({ scoreOutOfTen, ...restProps }) => (
      <ChartLine {...restProps} value={scoreOutOfTen} />
    ))}
  </>
);

ChartBlock.propTypes = {
  data: arrayOf(any),
};

ChartBlock.defaultProps = {
  data: [],
};

export default ChartBlock;
