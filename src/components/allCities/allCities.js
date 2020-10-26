import React, { useEffect } from 'react';
import NavigationBar from '../general/navigationBar';
import { connect } from 'react-redux';
import './allCities.css';
import { ALL } from '../mainPage/map/continentTypes';
import { Link } from 'react-router-dom';
import { getCity } from '../../store/reducers/city/actions';
import { changeFilter, generateCityList } from '../../store/reducers/cityList/actions';

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

const genreateLinkList = (array) => {
  const citiesLabels = array.map((continent, key) => {
    const element = [
      <td>
        <p key={key}>
          <span className="continentLabel">{continent[0]}</span>
        </p>
      </td>,
    ];
    continent[1].map((city, key) => {
      element.push(
        <td>
          <Link
            to={`/about?city=${city.name}`}
            className="cityLink"
            target="_blank"
            key={key + 1000}
            onClick={() => {
              getCity(city.name);
            }}
          >
            {city.name}
          </Link>
        </td>
      );
      return null;
    });
    const [a, ...others] = element;
    return (
      <div>
        <tr>{a}</tr>
        <tr>{others}</tr>
      </div>
    );
  });
  return citiesLabels;
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
      <div className="citiesList">
        <table>{getCitiesLabels([...cityList], filterType)}</table>
      </div>
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
