import React, { useState } from 'react';
import SearchField from './searchField';

function AboutCity() {
  const [city, setCity] = useState('');

  function handleChange(newValue) {
    setCity(newValue);
  }

  if (city) {
    
  }

  return (
    <div>
      <h1>{city}</h1>
      <SearchField setNewCity={handleChange} />
    </div>
  );
}

export default AboutCity;
