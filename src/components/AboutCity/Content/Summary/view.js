/* eslint-disable react/no-danger */
import {
  any, arrayOf, func, string,
} from 'prop-types';
import React from 'react';
import { InView } from 'react-intersection-observer';

import { QUALITY_ANCHOR } from 'consts/anchorsNames';

import styles from './style.css';

const Summary = ({
  name, summary, setVisibles, visibles,
}) => (
  <InView
    onChange={(inView) => {
      if (inView) {
        setVisibles([...visibles, QUALITY_ANCHOR]);
      } else {
        setVisibles(visibles.filter((anchor) => anchor !== QUALITY_ANCHOR));
      }
    }}
  >
    <div className={styles.container} id={QUALITY_ANCHOR}>
      <span className={styles.blockTitle}>{`QUALITY OF LIFE IN ${name.toUpperCase()}`}</span>
      <span dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  </InView>
);

Summary.propTypes = {
  name: string,
  summary: string,
  setVisibles: func,
  visibles: arrayOf(any),
};

Summary.defaultProps = {
  name: '',
  summary: '',
  setVisibles: () => {},
  visibles: [],
};

export default Summary;
