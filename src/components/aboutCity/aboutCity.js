import React from 'react';
import SearchField from './searchField';
import CityTitle from './cityTitle';
import { connect } from 'react-redux';
import { Dots } from 'react-preloaders';

const AboutCity = ({ state }) => {
  console.log(state);
  return (
    <div>
      {state.isDowloading && <Dots />}
      <SearchField />
      {state.data && <CityTitle />}
      {state.error && <p>Такого города нет</p>}
    </div>
  );
};

const mapStateToProps = function (state) {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(AboutCity);
