import React from 'react';
import NavigationBar from '../general/navigationBar';
import { connect } from 'react-redux';
import { Lines } from 'react-preloaders';
import './allCities.css';
const groupBy = (xs, key) => {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, Object.create(null));
};

const getCitiesLabels = (cities) => {
  const groupArrCities = Object.entries(groupBy(cities, 'continent'));
  const citiesLabels = groupArrCities.map((continent) => {
    const element = [
      <p>
        <span className="continentLabel">{continent[0]}</span>
      </p>,
    ];
    continent[1].map((city) => {
      element.push(<span className="cityLabel">{city.name}</span>);
      return '';
    });
    return element;
  });
  return citiesLabels;
};

const AllCities = ({ state }) => {
  return (
    <div>
      {/* {state.isDowloading && <Lines />} */}
      <NavigationBar />
      <div className="citiesList">{getCitiesLabels([...state.cities])}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(AllCities);
