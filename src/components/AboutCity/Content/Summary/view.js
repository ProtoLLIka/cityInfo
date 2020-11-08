/* eslint-disable react/no-danger */
import { string } from 'prop-types';
import React from 'react';

import { qualityAnchor } from 'consts/anchorsNames';

import styles from './style.css';

const Summary = ({ name, summary }) => (
  <div className={styles.container} id={qualityAnchor}>
    <span className={styles.blockTitle}>{`QUALITY OF LIFE IN ${name.toUpperCase()}`}</span>
    <span dangerouslySetInnerHTML={{ __html: summary }} />
  </div>
);

Summary.propTypes = {
  name: string,
  summary: string,
};

Summary.defaultProps = {
  name: '',
  summary: '',
};

export default Summary;
