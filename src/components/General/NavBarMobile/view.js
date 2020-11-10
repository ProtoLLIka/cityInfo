/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { bool, func } from 'prop-types';
import Burger from 'react-css-burger';
import Sticky from 'react-sticky-el';

import styles from './style.css';

const NavBarMobile = ({ handleLinkClick, setOpen, isOpen }) => (
  <Sticky>
    <div className={styles.container}>
      <div className={styles.burgerButton}>
        <Burger
          onClick={() => setOpen(!isOpen)}
          active={isOpen}
          burger="elastic"
          color={isOpen ? 'black' : '#0bcf6b'}
          scale={2}
        />
      </div>
      <div className={styles.menuList} style={{ display: isOpen ? 'block' : 'none' }}>
        <ul>
          <li>
            <Link
              to="/"
              className={`${styles.listElement}`}
              onClick={() => {
                handleLinkClick();
                setOpen(false);
              }}
            >
              Main
            </Link>
          </li>
          <li>
            <Link
              to="/all"
              className={`${styles.listElement}`}
              onClick={() => {
                handleLinkClick();
                setOpen(false);
              }}
            >
              All cities
            </Link>
          </li>
        </ul>
      </div>
      <button
        className={styles.filled}
        onClick={() => setOpen(false)}
        type="button"
        aria-label="close menu"
        style={{ display: isOpen ? 'block' : 'none' }}
      />
    </div>
  </Sticky>
);

NavBarMobile.propTypes = {
  handleLinkClick: func,
  setOpen: func,
  isOpen: bool,
};

NavBarMobile.defaultProps = {
  handleLinkClick: () => {},
  setOpen: () => {},
  isOpen: false,
};

export default NavBarMobile;
