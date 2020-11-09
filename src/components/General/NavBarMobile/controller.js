import React from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';

import { ALL } from 'consts/continentNames';
import View from './view'


const handleClick = (generateCityList, changeFilter) => {
  changeFilter(ALL);
  generateCityList();
};

const Controller = ({ generateCityList, changeFilter }) => {
    const handleLinkClick = () =>{
        handleClick(generateCityList, changeFilter);
    }
    
  return (
    <View handleLinkClick={handleLinkClick}/>
  );
};

Controller.propTypes = {
  generateCityList: func,
  changeFilter: func,
};

Controller.defaultProps = {
  generateCityList: () => {},
  changeFilter: () => {},
};

export default Controller;
