import React from 'react';
import { number, string } from 'prop-types';

import './style.css';

const ChartLine = ({ value, color, name }) => (
  <div className="lineBlock">
    <div className="nameBlock">
      <h1 className="lineName">{name}</h1>
    </div>
    <div className="progress-bar">
      <div className="filler" style={{ width: `${value * 10}%`, background: `${color}` }} />
    </div>
    <span className="scoreLabel">{`${Math.floor(value)}/10`}</span>
  </div>
);

ChartLine.propTypes = {
  value: number,
  color: string,
  name: string,
};

ChartLine.defaultProps = {
  value: 0,
  color: 'red',
  name: 'barName',
};

export default ChartLine;
