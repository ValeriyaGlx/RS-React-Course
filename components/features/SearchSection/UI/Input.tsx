import React, { FC, MutableRefObject } from 'react';

import { getDataLocalStorage } from '@/components/shared/lib/localStorage';
import { LOCAL_STORAGE_KEY } from '@/components/shared/constants/constants';

import styles from '../SearchSection.module.css';

type InputProps = {
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: MutableRefObject<HTMLInputElement | null>;
};

const Input: FC<InputProps> = ({ handleKeyPress, inputRef }) => {
  return (
    <input
      className={styles.searchInput}
      placeholder="Enter Character Name"
      ref={inputRef}
      onKeyDown={(e) => handleKeyPress(e)}
      defaultValue={getDataLocalStorage(LOCAL_STORAGE_KEY)}
    />
  );
};

export default Input;
