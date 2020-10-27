import React, { useEffect, useState } from 'react';
import NavigationBar from '../general/navigationBar';
import { connect } from 'react-redux';
import './styles/allCities.css';
import { ALL } from '../mainPage/map/continentTypes';
import { generateCityList } from '../../store/reducers/cityList/actions';
import CitiesList from './citiesList';

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

const genreateLinkList = (array = [[], []], filterName) => {
  const components = [];
  array.map((element, key) => {
    const continent = element[0];
    const cities = element[1];
    components.push(
      <CitiesList continent={continent} cities={cities} key={key} filterName={filterName} />
    );
    return;
  });
  return components;
};

export const getCitiesLabels = (cities, filterContinent, filterName) => {
  const grouped = Object.entries(groupBy(cities, 'continent'));
  const filtered = filterByContinent(grouped, filterContinent);
  const citiesLabels = genreateLinkList(filtered, filterName);
  return citiesLabels;
};

const AllCities = ({ state, generateCityList }) => {
  const cityList = state.cities;
  const filterContinent = state.filterType;
  const [filterName, setFilterName] = useState('');
  useEffect(() => {
    const getList = async () => {
      generateCityList();
    };
    getList();
  }, []);
  const labels = getCitiesLabels([...cityList], filterContinent, filterName);
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
      <div className="citiesList">{labels}</div>
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
export { getCitiesLabels as getLabels };
export default connect(mapStateToProps, mapDispatchToProps)(AllCities);
