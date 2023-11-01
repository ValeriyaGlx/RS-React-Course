import image from '../../assets/images/spinner.png';

import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles['loading-spinner']}>
      <img className={styles.spinner} src={image} alt="spinner" />
    </div>
  );
};

export default Spinner;
