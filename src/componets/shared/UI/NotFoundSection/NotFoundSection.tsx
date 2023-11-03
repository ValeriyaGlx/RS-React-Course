import image from '../../../../assets/images/notfound.png';

import styles from './NotFoundSection.module.css';

const NotFoundSection = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h2>Nothing Not Found</h2>
      <img className={styles.image} src={image} alt="not-found" />
    </div>
  );
};

export default NotFoundSection;
