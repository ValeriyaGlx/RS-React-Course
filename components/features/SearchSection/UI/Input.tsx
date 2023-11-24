import React, { FC, MutableRefObject } from 'react';
import { useRouter } from 'next/router';

import styles from '../SearchSection.module.css';

type InputProps = {
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: MutableRefObject<HTMLInputElement | null>;
};

const Input: FC<InputProps> = ({ handleKeyPress, inputRef }) => {
  const router = useRouter();
  const { value } = router.query;

  return (
    <input
      className={styles.searchInput}
      placeholder="Enter Character Name"
      ref={inputRef}
      onKeyDown={(e) => handleKeyPress(e)}
      defaultValue={value ?? ''}
    />
  );
};

export default Input;
