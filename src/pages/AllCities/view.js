import React, { useEffect, useState } from 'react';

import NavigationBar from '../../components/General/NavigationBar/index';
import { ALL } from '../../consts/consts';
import { generateCityList } from '../../store/reducers/cityList/reducer';
import CitiesList from '../../components/AllCities/CitiesList/index';

import './style.css';

const groupBy = (array, key) => {
  const groupedByKey = array.reduce((groupedByKey, arrayItem) => {
    const groupKey = arrayItem[key];
    const prevGroupedItems = groupedByKey[groupKey] || [];

    return {
      ...groupedByKey,
      [groupKey]: [...prevGroupedItems, arrayItem],
    };
  }, {});

  return groupedByKey;
};

const filterByContinent = (cities, continentName) => {
  if (continentName === ALL) {
    return cities;
  }

  const continentCities = cities.find(({ name }) => name === continentName);

  return continentCities;
};

export const getContinent = (citiesArray, continentName, search) => {
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
    const getList = async () => {
      generateCityList();
    };
    getList();
  }, []);

  const continent = getContinent([...cityList], filterContinent, filterName);

  return (
    <div>
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
        <CitiesList
          continent={continent}
          cities={continent.cities}
          key={key}
          filterName={searchString}
        />
      </div>
    </div>
  );
};

export default AllCities;
