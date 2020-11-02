import React from 'react';
import {
  any, arrayOf, func, string,
} from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

const generateCitiesLinks = (cities, nameFilter, getCity) => {
  const filteredCitiesByName = cities.filter((city) => {
    const nameFilterLowerCase = nameFilter.toLowerCase();
    const cityNameLowerCase = city.name.toLowerCase();
    const isNameContains = cityNameLowerCase.includes(nameFilterLowerCase);

    return isNameContains;
  });

  const citiesLinks = filteredCitiesByName.map(({ name }, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Link to="/about" key={index} className="link" onClick={() => getCity(name)}>
      {name}
    </Link>
  ));

  return citiesLinks;
};

const ContinentCitiesList = ({
  cities, continentName, nameFilter, getCity,
}) => {
  const citiesLinks = generateCitiesLinks(cities, nameFilter, getCity);
  const label = citiesLinks.length >= 1 ? <h1>{continentName}</h1> : null;

  return (
    <div className="cititesBlock">
      {label}
      <div className="cititesList">{citiesLinks}</div>
    </div>
  );
};

ContinentCitiesList.propTypes = {
  continentName: string,
  cities: arrayOf(any),
  nameFilter: string,
  getCity: func,
};

ContinentCitiesList.defaultProps = {
  continentName: '',
  cities: [],
  nameFilter: '',
  getCity: () => {},
};

export default ContinentCitiesList;
