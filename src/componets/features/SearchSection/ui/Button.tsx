import { FC } from 'react';

import styles from '../SearchSection.module.css';

type ButtonProps = {
  handleClick: () => void;
};

const Button: FC<ButtonProps> = ({ handleClick }) => {
  return (
    <button className={styles.searchButton} onClick={() => handleClick()}>
      Search
    </button>
  );
};

export default Button;
