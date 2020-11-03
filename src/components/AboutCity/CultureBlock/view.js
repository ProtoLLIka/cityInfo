/* eslint-disable react/forbid-prop-types */ /* eslint-disable no-unused-vars */

import React from 'react';
import { arrayOf, object } from 'prop-types';

import styles from './style.css';

const CultureBlock = ({ culture }) => <div className={styles} />;

CultureBlock.propTypes = {
  culture: arrayOf(object),
};

CultureBlock.defaultProps = {
  culture: [],
};

export default CultureBlock;
