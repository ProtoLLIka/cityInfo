import React from 'react';
import { Progress } from 'semantic-ui-react';

const ChartBlock = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div>
      <Progress percent={54} color="red" />
      <Progress percent={54} color="red" />
      <Progress percent={54} color="red" />
    </div>
  );
};

export default ChartBlock;
