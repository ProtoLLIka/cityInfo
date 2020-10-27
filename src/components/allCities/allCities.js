import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import NavigationBar from '../General/navigationBar';
import { ALL } from '../MainPage/map/continentTypes';
import { generateCityList } from '../../store/reducers/cityList/actions';
import CitiesList from './citiesList';

import './styles/allCities.css';

const groupBy = (array, key) => {
  const groupedByKey = array.reduce(function (groupedByKey, arrayItem) {
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

export const getContinent = (cities, continentName, search) => {
  const continents = Object.entries(groupBy(cities, 'continent')).map(([name, cities]) => ({
    name,
    cities,
  }));
  const continent = filterByContinent(grouped, filterContinent);

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

const mapStateToProps = (state) => {
  return {
    cities,
    filterType, // через селекторы стора
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    generateCityList: () => {
      dispatch(generateCityList());
    },
  };
};
export { getCitiesLabels as getLabels };
export default connect(mapStateToProps, mapDispatchToProps)(AllCities);
