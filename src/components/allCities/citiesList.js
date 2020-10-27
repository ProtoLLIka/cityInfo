import React from 'react';
import { Link } from 'react-router-dom';
import './styles/citiesList.css';
import { getCity } from '../../store/reducers/city/actions';

const sliceArray = (array, sliceSize = Math.ceil(array.length / 3)) => {
  if (!array) return array;
  const arrayLength = array.length;
  const tempArray = [];
  for (let index = 0; index < arrayLength; index += sliceSize) {
    const myChunk = array.slice(index, index + sliceSize);
    tempArray.push(myChunk);
  }
  if (tempArray.length <= 0) return array;
  return { continent: array[0].continent, arr: tempArray };
};

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
  const result = [];
  array.map((element, key) => {
    const list = generateList(element);
    result.push(
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

const CitiesList = (props) => {
  const continent = props.continent;
  const cities = props.cities;
  const filterName = props.filterName;

  const filtered = filterCityName(cities, filterName);
  const separated = sliceArray(filtered);
  const { arr } = separated;
  const listBlocks = generateListBlock(arr);
  return (
    <div className="listBlock">
      {listBlocks ? <h1 className="continentName">{continent.toUpperCase()}</h1> : ''}
      {continent ? listBlocks : <div></div>}
    </div>
  );
};

export default CitiesList;
