import { Component } from 'react';

import logo from '../../assets/images/logo.png';
import SearchSection from '../SearchSection/SearchSection';

import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>
        <SearchSection />
      </header>
    );
  }
}

export default Header;
