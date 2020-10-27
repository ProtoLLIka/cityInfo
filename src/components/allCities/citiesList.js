import React from 'react';
import { Link } from 'react-router-dom';

import { getCity } from '../../store/reducers/city/actions';

import './styles/citiesList.css';

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
      </Link>
    );
  });
  return result;
};

const generateListBlock = (array) => {
  if (!array) return;
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
  const res = [];
  cities.map((element) => {
    if (element.name.toLowerCase().includes(filter)) {
      res.push(element);
    }
  });
  return res;
};

const CitiesList = ({ continent, cities, filterName }) => {
  const filtered = filterCityName(cities, filterName);
  const separated = sliceArray(filtered);
  const { arr } = separated;
  const listBlocks = generateListBlock(arr);

  return <div className="listBlock">{continent ? listBlocks : null}</div>;
};

const Title = () => {
  if (a) {
    return null;
  }

  return <h1 className="continentName">{continent.toUpperCase()}</h1>;
};

export default CitiesList;
