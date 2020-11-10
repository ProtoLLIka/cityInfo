/* eslint-disable react/no-danger */
import { string } from 'prop-types';
import React from 'react';

import { QUALITY_ANCHOR } from 'consts/anchorsNames';

import style from './style.css';

const Summary = ({ name, summary }) => (
  <div className={style.container} id={QUALITY_ANCHOR}>
    <span className={style.blockTitle}>{`QUALITY OF LIFE IN ${name.toUpperCase()}`}</span>
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
