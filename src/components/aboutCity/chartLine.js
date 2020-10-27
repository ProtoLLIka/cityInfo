import React from 'react';

import './styles/chartLine.css';

const ChartLine = ({ value, color, name }) => {
  return (
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
};

export default ChartLine;
