import { Link, useLocation } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <Link to="/" className={location.pathname === '/' ? styles.active : ''}>
        Main
      </Link>
      <Link
        to="/uncontrolled-form"
        className={
          location.pathname === '/uncontrolled-form' ? styles.active : ''
        }
      >
        Uncontrolled Form
      </Link>
      <Link
        to="/react-hook-form"
        className={
          location.pathname === '/react-hook-form' ? styles.active : ''
        }
      >
        React Hook Form
      </Link>
    </header>
  );
};

export default Header;
