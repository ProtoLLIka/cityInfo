/* eslint-disable react/no-danger */
import { string } from 'prop-types';
import React from 'react';
import { isMobile } from 'react-device-detect';

import { QUALITY_ANCHOR } from 'consts/anchorsNames';

import styles from './style.css';

const Summary = ({ name, summary }) => (
  <div className={isMobile ? styles.mobileContainer : styles.container} id={QUALITY_ANCHOR}>
    <span className={isMobile ? styles.blockTitleMobile : styles.blockTitle}>
      {`QUALITY OF LIFE IN ${name.toUpperCase()}`}
    </span>
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
