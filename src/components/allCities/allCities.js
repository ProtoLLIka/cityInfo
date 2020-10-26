import React from 'react';
import NavigationBar from '../general/navigationBar';
import { connect } from 'react-redux';
import './allCities.css';
import { ALL } from '../mainPage/map/continentTypes';
import { Link } from 'react-router-dom';
import { getCity } from '../../store/reducers/city/actions';

const groupBy = (xs, key) => {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, Object.create(null));
};

const filterByContinent = (array, filter) => {
  if (filter === ALL) return array;
  return array.filter((element) => element[0] === filter);
};

const getCitiesLabels = (cities, filterType) => {
  const grouped = Object.entries(groupBy(cities, 'continent'));
  const filtered = filterByContinent(grouped, filterType);
  const citiesLabels = filtered.map((continent) => {
    const element = [
      <p>
        <span className="continentLabel">{continent[0]}</span>
      </p>,
    ];
    continent[1].map((city) => {
      element.push(
        <Link
          to="/about"
          className="cityLink"
          onClick={() => {
            getCity(city.name);
          }}
        >
          {city.name}
        </Link>
      );
      return '';
    });
    return element;
  });
  return citiesLabels;
};

const AllCities = ({ state }) => {
  const cityList = state.cities;
  const filterType = state.filterType;
  return (
    <div>
      {/* {state.isDowloading && <Lines />} */}
      <NavigationBar />
      <div className="citiesList">{getCitiesLabels([...cityList], filterType)}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.cityListReducer,
  };
};

export default connect(mapStateToProps)(AllCities);
