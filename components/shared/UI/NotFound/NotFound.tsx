import Image from 'next/image';

import image from '../../../../public/assets/images/notfound.png';

import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h2>Nothing Not Found</h2>
      <Image width={270} height={400} src={image} alt="not-found" />
    </div>
  );
};

export default NotFound;
