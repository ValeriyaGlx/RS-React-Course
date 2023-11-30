import { Link } from 'react-router-dom';

import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <>
      <h2>Oh dear. Are you lost?</h2>
      <Link className={styles.button} to="/">
        Go to Main
      </Link>
    </>
  );
};

export default NotFound;
