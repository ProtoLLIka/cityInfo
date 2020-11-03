/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { arrayOf, object } from 'prop-types';

import styles from './style.css';

const CostOfLivingBlock = ({ costOfLiving }) => <div className={styles} />;

CostOfLivingBlock.propTypes = {
  costOfLiving: arrayOf(object),
};

CostOfLivingBlock.defaultProps = {
  costOfLiving: [],
};

export default CostOfLivingBlock;
