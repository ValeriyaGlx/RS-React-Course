import logo from '../../../assets/images/logo.png';
import SearchSection from '../../features/SearchSection/SearchSection';
import ErrorButton from '../../shared/UI/ErrorButton/ErrorButton';
import smoke from '../../../assets/images/smoke.png';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.smoke} src={smoke} alt="smoke" />
      <div>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
      <ErrorButton />
      <SearchSection />
    </header>
  );
};

export default Header;
