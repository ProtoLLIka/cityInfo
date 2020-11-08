import { bool } from 'prop-types';
import React from 'react';

import styles from './style.css';

const Preloader = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className={styles.preloaderContainer}>
      <svg className={styles.preloader}>
        <rect fill="#21c573" stroke="#fff" strokeWidth="4" x="25" y="25" width="50" height="50">
          <animateTransform
            attributeName="transform"
            dur="0.5s"
            from="0 50 50"
            to="180 50 50"
            type="rotate"
            id="strokeBox"
            attributeType="XML"
            begin="rectBox.end"
          />
        </rect>
        <rect x="27" y="27" fill="#fff" width="46" height="50">
          <animate
            attributeName="height"
            dur="1.3s"
            attributeType="XML"
            from="50"
            to="0"
            id="rectBox"
            fill="freeze"
            begin="0s;strokeBox.end"
          />
        </rect>
      </svg>
    </div>
  );
};

Preloader.propTypes = {
  isLoading: bool,
};

Preloader.defaultProps = {
  isLoading: false,
};

export default Preloader;
