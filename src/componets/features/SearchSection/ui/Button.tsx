import { FC } from 'react';

import styles from '../SearchSection.module.css';

type ButtonProps = {
  handleClick: (res: string) => Promise<void>;
  inputValue: string;
};

const Button: FC<ButtonProps> = ({ handleClick, inputValue }) => {
  return (
    <button
      className={styles.searchButton}
      onClick={() => handleClick(inputValue.trim())}
    >
      Search
    </button>
  );
};

export default Button;
