import React from 'react';
import './styles/chartLine.css';
const ChartLine = (props) => {
  const value = props.value;
  const color = props.color;
  const name = props.name;
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
