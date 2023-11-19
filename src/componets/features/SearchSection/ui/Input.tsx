import React, { FC } from 'react';

import styles from '../SearchSection.module.css';

type InputProps = {
  handleKeyPress: (
    e: React.KeyboardEvent<HTMLInputElement>,
    res: string
  ) => void;
  inputValue: string;
  onHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<InputProps> = ({
  handleKeyPress,
  inputValue,
  onHandleChange,
}) => {
  return (
    <input
      className={styles.searchInput}
      placeholder="Enter Character Name"
      value={inputValue}
      onChange={(e) => onHandleChange(e)}
      onKeyDown={(e) => handleKeyPress(e, inputValue.trim())}
    />
  );
};

export default Input;
