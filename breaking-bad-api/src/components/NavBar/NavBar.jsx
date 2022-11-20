import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavBar.module.css';

const seriesLogo = 'src/assets/breakingbadlogo.png';

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to={'/'}>
          <img src={seriesLogo} alt='' />
        </Link>
        <ul>
          <Link to={'/'}>
            <li>Home</li>
          </Link>
          <Link to={'/characters'}>
            <li>Search Characters</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
