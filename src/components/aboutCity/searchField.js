import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { setSearchCity } from '../../store/actions.js';

const SearchField = ({ setSearchCity }) => {
  let cityName = '';

  function handleKeyPress(e) {
    const { key } = e;
    if (key === 'Enter') {
      setSearchCity(cityName);
    }
  }

  return (
    <div>
      <TextField
        onChange={(value) => (cityName = value.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button
        onClick={() => {
          setSearchCity(cityName);
        }}
      >
        Find
      </Button>
    </div>
  );
};
const mapStateToProps = () => {};
const mapDispatchToProps = (dispatch) => {
  return {
    setSearchCity: (text) => {
      dispatch(setSearchCity(text));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
