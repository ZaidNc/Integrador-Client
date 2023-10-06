import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import PATHROUTES from '../../helpers/PathRoutes.helper';
import styles from './Nav.module.css';

const Nav = (props) => {
  const { onSearch } = props;
  return (
    <div className={styles.navbar}>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <Link to={PATHROUTES.HOME} className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to={PATHROUTES.ABOUT} className={styles.navLink}>
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to={PATHROUTES.FAVORITES} className={styles.navLink}>
            Favorites
          </Link>
        </li>
      </ul>
      <SearchBar onSearch={onSearch} className={styles.searchBar} />
    </div>
  );
};

export default Nav;
