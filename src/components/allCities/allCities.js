import React from 'react';
import NavigationBar from '../general/navigationBar';
import { connect } from 'react-redux';
const groupBy = (xs, key) => {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, Object.create(null));
};

const AllCities = ({ state }) => {
  const cities = groupBy([...state.cities], 'continent');
  console.log(Object.entries(cities));
  const arr = Object.entries(cities).map((continent) => {
    const element = [<h1>{continent[0]}</h1>];
    continent[1].map((city) => {
      element.push(<p>{city.name}</p>);
      return '';
    });
    return element;
  });
  return (
    <div>
      <NavigationBar />
      {arr}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
export default connect(mapStateToProps)(AllCities);
