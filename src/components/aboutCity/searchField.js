import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { createStore } from 'redux';

function SearchField() {
  const [cityName, setCityName] = useState('firstName');

  function handleClick() {
    // props.setNewCity(cityName);
  }
  console.log(cityName);
  return (
    <div>
      <TextField onChange={(value) => setCityName(value.target.value)} />
      <Button onClick={handleClick}>Find</Button>
    </div>
  );
}

const reduser = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_CITY':
      return action.text;
    case 'DROP_SEARCH_CITY':
      return '';
    default:
      return state;
  }
};

const store = createStore(reduser);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({ type: 'SET_SEARCH_CITY', text: 'Moscow' });
store.dispatch({ type: 'DROP_SEARCH_CITY' });
store.dispatch({ type: 'SET_SEARCH_CITY', text: 'LA' });

export default SearchField;
