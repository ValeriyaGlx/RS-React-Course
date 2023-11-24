import React, { useRef } from 'react';
import { useRouter } from 'next/router';

import { setDataLocalStorage } from '@/components/shared/lib/localStorage';
import Button from '@/components/features/SearchSection/UI/Button';
import Input from '@/components/features/SearchSection/UI/Input';
import {
  DEFAULT_PAGE,
  LOCAL_STORAGE_KEY,
} from '@/components/shared/constants/constants';

import styles from './SearchSection.module.css';

const SearchSection = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const changeUrl = (inputValue: string) => {
    const query = {
      ...router.query,
      page: DEFAULT_PAGE,
      value: inputValue.trim(),
    };
    router.push({
      pathname: router.pathname,
      query,
    });
  };

  const handleClick = () => {
    const inputValue = inputRef.current?.value ?? '';
    setDataLocalStorage(LOCAL_STORAGE_KEY, inputValue);
    changeUrl(inputValue);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div className={styles.searchContainer}>
      <Input handleKeyPress={handleKeyPress} inputRef={inputRef} />
      <Button handleClick={handleClick} />
    </div>
  );
};

export default SearchSection;
