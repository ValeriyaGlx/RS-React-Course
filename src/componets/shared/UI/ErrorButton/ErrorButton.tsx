import { useState } from 'react';

import styles from './ErrorButton.module.css';

const ErrorButton = () => {
  const [isError, setIsError] = useState(false);

  if (isError) {
    throw new Error('I crashed!');
  }

  return (
    <button className={styles.errorButton} onClick={() => setIsError(true)}>
      Break It All Down
    </button>
  );
};

export default ErrorButton;
