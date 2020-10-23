import React from 'react';
import { Link } from 'react-router-dom';
import SearchField from './searchField';
import './styles/navigationBar.css';
import { generateCityList, changeFilter } from '../../store/reducers/cityList/actions';
import { connect } from 'react-redux';
import { ALL } from '../mainPage/map/continentTypes';

const NavigationBar = ({ generateCityList, changeFilter }) => {
  return (
    <div className="container">
      <span className="allCitiesBtn">
        <Link
          to="/all"
          className="link"
          onClick={() => {
            changeFilter(ALL);
            generateCityList();
          }}
        >
          All cities
        </Link>
      </span>
      <p className="logo">LOGO HERE!</p>
      <SearchField />
    </div>
  );
};

const mapStateToProps = () => {};
const mapDispatchToProps = (dispatch) => {
  return {
    generateCityList: () => {
      dispatch(generateCityList());
    },
    changeFilter: (type) => {
      dispatch(changeFilter(type));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
