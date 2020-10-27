import React from 'react';
import ChartLine from './chartLine';

const ChartBlock = (props) => {
  const { data } = props;
  const linesArray = data.map((line) => {
    return <ChartLine color={line.color} name={line.name} value={line.score_out_of_10} />;
  });
  return <div>{linesArray}</div>;
};

export default ChartBlock;
