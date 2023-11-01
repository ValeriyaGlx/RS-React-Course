import logo from '../../assets/images/logo.png';
import SearchSection from '../SearchSection/SearchSection';
import ErrorButton from '../ErrorButton/ErrorButton';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
      <ErrorButton />
      <SearchSection />
    </header>
  );
};

export default Header;
