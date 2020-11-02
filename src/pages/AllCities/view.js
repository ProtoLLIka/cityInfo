/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { arrayOf, any, func } from 'prop-types';

import NavigationBar from 'components/General/NavigationBar/index';
import { ALL } from 'consts/consts';
// import { generateCityList } from 'store/reducers/cityList/reducer';

import './style.css';
import ContinentCitiesList from 'components/General/ContinentCitiesList';

const generateLinksBlocks = (cities, nameFilter) => {
  const citiesBlocks = cities.map((cititesOnContinent, index) => {
    const continentName = cititesOnContinent[0].continent;
    const block = (
      <ContinentCitiesList
        cities={cititesOnContinent}
        continentName={continentName}
        key={index}
        nameFilter={nameFilter}
      />
    );
    return block;
  });
  return citiesBlocks;
};

const AllCities = ({ cities, generateCityList }) => {
  useEffect(() => {
    const getCityList = async () => {
      generateCityList();
    };
    getCityList();
  }, []);

  const [nameFilter, setNameFilter] = useState('');
  const listBlocks = generateLinksBlocks(cities, nameFilter);
  return (
    <>
      {/* {state.isLoading && <Lines />} */}
      <NavigationBar />
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search.."
          className="search"
          onChange={(event) => {
            setNameFilter(event.target.value);
          }}
        />
      </div>
      <div className="citiesList">{listBlocks}</div>
    </>
  );
};

AllCities.propTypes = {
  cities: arrayOf(any),
  generateCityList: func,
};

AllCities.defaultProps = {
  cities: [],
  generateCityList: () => {},
};

export default AllCities;
