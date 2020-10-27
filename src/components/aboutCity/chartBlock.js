import React from 'react';

import ChartLine from './chartLine';

const ChartBlock = ({ data }) => (
  <>
    {data.map(({ score_out_of_10, ...restProps }) => (
      <ChartLine {...restProps} value={score_out_of_10} />
    ))}
  </>
);

export default ChartBlock;
