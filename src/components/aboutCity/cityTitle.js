import React, { Component } from 'react';
import { connect } from 'react-redux';

function CityTitle({ state }) {
  const { name, population, xPos, yPos } = state.city;
  return (
    <div>
      <h1>{name}</h1>
      <p>Локация:</p>
      <p>
        {xPos} - {yPos}
      </p>
      <p>Население: {population} чел.</p>
    </div>
  );
}
const mapStateToProps = function (state) {
  return {
    state: state.data,
  };
};
export default connect(mapStateToProps)(CityTitle);
