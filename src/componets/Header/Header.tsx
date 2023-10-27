import { Component } from 'react';
import logo from '../../assets/images/logo.png';
import styles from './Header.module.css';
import SearchSection from '../SearchSection/SearchSection';

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
