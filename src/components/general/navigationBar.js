import React from 'react';
import { Link } from 'react-router-dom';
import SearchField from './searchField';
import './styles/navigationBar.css';
import { generateCityList } from '../../store/reducers/cityList/actions';
import { connect } from 'react-redux';

const NavigationBar = ({ generateCityList }) => {
  return (
    <div className="container">
      <span className="allCitiesBtn">
        <Link
          to="/all"
          className="link"
          onClick={() => {
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
