import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">Main</Link>
      <Link to="/uncontrolled-form">Uncontrolled Form</Link>
      <Link to="/react-hook-form">React Hook Form</Link>
    </header>
  );
};

export default Header;
