import React from 'react';
import { Link } from 'react-router-dom';
import './styles/citiesList.css';
import { getCity } from '../../store/reducers/city/actions';

const sliceArray = (myArray, sliceSize = Math.ceil(myArray.length / 3)) => {
  const arrayLength = myArray.length;
  const tempArray = [];
  for (let index = 0; index < arrayLength; index += sliceSize) {
    const myChunk = myArray.slice(index, index + sliceSize);
    tempArray.push(myChunk);
  }
  return { continent: myArray[0].continent, arr: tempArray };
};

const generateList = (cities) => {
  console.log(`generateList input`, cities);
  const result = [];
  cities.map((city, key) => {
    result.push(
      <Link
        to={`/about?city=${city.name}`}
        className="cityLink city"
        target="_blank"
        key={key}
        onClick={() => {
          getCity(city.name);
        }}
      >
        {city.name}
      </Link>
    );
  });
  console.log(`generateList output`, result);
  return result;
};

const generateListBlock = (array) => {
  console.log(`generateListBlock input`, array);
  const result = [];
  array.map((element, key) => {
    const list = generateList(element);
    result.push(
      <div className="list" key={key}>
        {list}
      </div>
    );
  });
  console.log(`generateListBlock output`, result);
  return result;
};

const CitiesList = (props) => {
  const continent = props.continent;
  const cities = props.cities;
  console.log('continent', continent);
  console.log('cities', cities);
  const separated = sliceArray(cities);
  const { arr } = separated;
  const listBlocks = generateListBlock(arr);
  return (
    <div className="listBlock">
      <h1 className="continentName">{continent.toUpperCase()}</h1>
      {continent ? listBlocks : <div></div>}
    </div>
  );
};

export default CitiesList;
