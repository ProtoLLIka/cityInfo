import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function SearchField(props) {
  const [cityName, setCityName] = useState('firstName');

  function handleClick() {
    props.setNewCity(cityName);
  }
  console.log(cityName);
  return (
    <div>
      <TextField onChange={(value) => setCityName(value.target.value)} />
      <Button onClick={handleClick}>Find</Button>
    </div>
  );
}

export default SearchField;
