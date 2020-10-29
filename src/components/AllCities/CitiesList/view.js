/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';
import { string, arrayOf, any } from 'prop-types';

import getCity from 'store/reducers/city/actions';

import './style.css';

const generateList = (cities) => {
  const result = [];
  cities.map((city, key) => {
    result.push(
      <Link
        to={`/about?city=${city.name}`}
        className="cityLink city"
        key={key}
        onClick={() => {
          getCity(city.name);
        }}
      >
        {city.name}
      </Link>,
    );
    return '';
  });
  return result;
};

const generateListBlock = (array) => {
  if (!array) return null;
  const result = array.map((element, key) => {
    const list = generateList(element);
    return (
      <div className="list" key={key}>
        {list}
      </div>
    );
  });

  return result;
};

const filterCityName = (arr, filterName) => {
  if (!filterName) return arr;
  const cities = [...arr];
  const filter = filterName.toLowerCase();
  const res = cities.map((element) => {
    if (element.name.toLowerCase().includes(filter)) {
      return element;
    }
    return null;
  });
  return res;
};

const CitiesList = ({ continent, cities, filterName }) => {
  const filtered = filterCityName(cities, filterName);
  // const separated = sliceArray(filtered);
  const { arr } = filtered;
  const listBlocks = generateListBlock(arr);

  return <div className="listBlock">{continent ? listBlocks : null}</div>;
};

CitiesList.propTypes = {
  continent: string,
  cities: arrayOf(any),
  filterName: string,
};

CitiesList.defaultProps = {
  continent: '',
  cities: '',
  filterName: '',
};

export default CitiesList;
