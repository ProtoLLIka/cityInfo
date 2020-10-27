import React, { useEffect } from 'react';
import NavigationBar from '../general/navigationBar';
import { connect } from 'react-redux';
import './styles/allCities.css';
import { ALL } from '../mainPage/map/continentTypes';
import { getCity } from '../../store/reducers/city/actions';
import { changeFilter, generateCityList } from '../../store/reducers/cityList/actions';
import CitiesList from './citiesList';
import { TextField } from '@material-ui/core';
import SearchField from '../general/searchField';

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

const genreateLinkList = (array = [[], []]) => {
  const components = [];
  array.map((element, key) => {
    const continent = element[0];
    const cities = element[1];
    components.push(<CitiesList continent={continent} cities={cities} key={key} />);
    return;
  });
  return components;
};

const getCitiesLabels = (cities, filterType) => {
  const grouped = Object.entries(groupBy(cities, 'continent'));
  const filtered = filterByContinent(grouped, filterType);
  const citiesLabels = genreateLinkList(filtered);
  return citiesLabels;
};

const AllCities = ({ state, generateCityList }) => {
  const cityList = state.cities;
  const filterType = state.filterType;
  useEffect(() => {
    const getList = async () => {
      generateCityList();
    };
    getList();
  }, []);

  return (
    <div>
      {/* {state.isDowloading && <Lines />} */}
      <NavigationBar />
      <SearchField />
      <div className="citiesList">{getCitiesLabels([...cityList], filterType)}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.cityListReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    generateCityList: () => {
      dispatch(generateCityList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCities);
