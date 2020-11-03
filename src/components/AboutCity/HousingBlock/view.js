/* eslint-disable react/forbid-prop-types */ /* eslint-disable no-unused-vars */

import React from 'react';
import { arrayOf, object } from 'prop-types';

import styles from './style.css';

const HousingBlock = ({ housing }) => <div className={styles} />;

HousingBlock.propTypes = {
  housing: arrayOf(object),
};

HousingBlock.defaultProps = {
  housing: [],
};

export default HousingBlock;
