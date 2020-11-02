/* eslint-disable no-unused-vars */
import React from 'react';
import { any, arrayOf, string } from 'prop-types';
import { Link } from 'react-router-dom';

import getCity from 'store/reducers/city/actions';

import './style.css';
import history from 'utils/history';

const clickHandler = (cityName) => {
  console.log(cityName);
  getCity(cityName);
};

const generateCitiesLinks = (cities, nameFilter) => {
  const filteredCitiesByName = cities.filter((city) => {
    const nameFilterLowerCase = nameFilter.toLowerCase();
    const cityNameLowerCase = city.name.toLowerCase();
    const isNameContains = cityNameLowerCase.includes(nameFilterLowerCase);
    return isNameContains;
  });

  const citiesLinks = filteredCitiesByName.map(({ name }, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Link to="/all" key={index} className="link" onClick={() => clickHandler(name)}>
      {name}
    </Link>
  ));
  return citiesLinks;
};

const ContinentCitiesList = ({ cities, continentName, nameFilter }) => {
  const citiesLinks = generateCitiesLinks(cities, nameFilter);
  const label = citiesLinks.length >= 1 ? <h1>{continentName}</h1> : null;
  history.push('/about');
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
};

ContinentCitiesList.defaultProps = {
  continentName: '',
  cities: [],
  nameFilter: '',
};

export default ContinentCitiesList;
