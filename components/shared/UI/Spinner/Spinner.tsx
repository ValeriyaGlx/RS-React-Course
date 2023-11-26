import Image from 'next/image';

import image from '../../../../public/assets/images/spinner.png';

import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles['loading-spinner']}>
      <Image className={styles.spinner} src={image} alt="spinner" />
    </div>
  );
};

export default Spinner;
