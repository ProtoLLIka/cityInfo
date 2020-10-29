import React, { useEffect, useState } from 'react';
import {
  string, arrayOf, any, func,
} from 'prop-types';

import NavigationBar from 'components/General/NavigationBar/index';
import { ALL } from 'consts/consts';
// import { generateCityList } from 'store/reducers/cityList/reducer';
import CitiesList from 'components/AllCities/CitiesList/index';

import './style.css';

const groupBy = (xs, key) => xs.reduce((rv, x) => {
  const o = rv;
  (o[x[key]] = o[x[key]] || []).push(x);
  return o;
}, Object.create(null));

const filterByContinent = (cities, continentName) => {
  if (continentName === ALL) {
    return cities;
  }

  const continentCities = cities.find(({ name }) => name === continentName);

  return continentCities;
};

export const getContinent = (citiesArray, continentName) => {
  const continents = Object.entries(groupBy(citiesArray, 'continent')).map(([name, cities]) => ({
    name,
    cities,
  }));
  const continent = filterByContinent(continents, continentName);

  return continent;
};

const AllCities = ({ cities, filterType, generateCityList }) => {
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    const getCityList = async () => {
      generateCityList();
    };
    getCityList();
  }, []);

  const continent = getContinent([...cities], filterType, filterName);
  console.log(continent);
  return (
    <>
      {/* {state.isDowloading && <Lines />} */}
      <NavigationBar />
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search.."
          className="search"
          onChange={(event) => {
            setFilterName(event.target.value);
          }}
        />
      </div>
      <div className="citiesList">
        <CitiesList continent={continent} cities={continent.cities} />
      </div>
    </>
  );
};

AllCities.propTypes = {
  cities: arrayOf(any),
  filterType: string,
  generateCityList: func,
};

AllCities.defaultProps = {
  cities: [],
  filterType: '',
  generateCityList: () => {},
};

export default AllCities;
