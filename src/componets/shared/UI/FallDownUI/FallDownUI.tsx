import image from '../../../../assets/images/break.png';

import styles from './FallDownUI.module.css';

const FallDownUI = () => {
  return (
    <div className={styles.breakContainer}>
      <h2>Something went wrong. Refresh the page, please.</h2>
      <img className={styles.image} src={image} alt="break" />
    </div>
  );
};

export default FallDownUI;
