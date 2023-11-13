import { Link } from 'react-router-dom';

import StarBackground from '../../shared/UI/StarBackground/StarBackground';

import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <>
      <StarBackground />
      <h2>Oh dear. Are you lost?</h2>
      <Link className={styles.button} to="/">
        Go to Main
      </Link>
    </>
  );
};

export default NotFound;
