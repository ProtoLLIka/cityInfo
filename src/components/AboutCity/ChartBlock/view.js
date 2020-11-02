import React from 'react';
import { arrayOf, any } from 'prop-types';

import ChartLine from 'components/AboutCity/ChartLine/index';

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
