import React from 'react';
import { any, arrayOf, string } from 'prop-types';

import './style.css';
import { Link } from 'react-router-dom';

const generateCitiesLinks = (cities) => {
  const citiesLinks = cities.map((city) => (
    <Link to="/main" key={city}>
      {city}
    </Link>
  ));

  return citiesLinks;
};

const ContinentCitiesList = ({ continent, cities }) => {
  const citiesLinks = generateCitiesLinks(cities);
  return (
    <div className="continentCitiesList">
      <h1>{continent}</h1>
      <>{citiesLinks}</>
    </div>
  );
};

ContinentCitiesList.propTypes = {
  continent: string,
  cities: arrayOf(any),
};

ContinentCitiesList.defaultProps = {
  continent: '',
  cities: [],
};

export default ContinentCitiesList;
