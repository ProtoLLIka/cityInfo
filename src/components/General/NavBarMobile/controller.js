import React, { useState } from 'react';
import { func } from 'prop-types';

import { ALL } from 'consts/continentNames';
import View from './view';

const handleClick = (generateCityList, changeFilter) => {
  changeFilter(ALL);
  generateCityList();
};

const Controller = ({ generateCityList, changeFilter }) => {
  const handleLinkClick = () => {
    handleClick(generateCityList, changeFilter);
  };
  const [isOpen, setOpen] = useState(false);
  return <View handleLinkClick={handleLinkClick} setOpen={setOpen} isOpen={isOpen} />;
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
