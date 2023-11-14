import React, { useEffect, useState } from 'react';

import { getDataLocalStorage } from '../../shared/lib/localStorage';

import styles from './SearchSection.module.css';
import Input from './ui/Input';
import Button from './ui/Button';
import useCharacterSearch from './hooks/useCharacterSearch';

const SearchSection = () => {
  const [inputValue, setInputValue] = useState(
    getDataLocalStorage('characterSearch')
  );
  const { getAllCharacters } = useCharacterSearch();

  const handleClick = (res: string) => getAllCharacters(res);
  useEffect(() => {
    const value = getDataLocalStorage('characterSearch');
    handleClick(value);
  }, []);

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>,
    res: string
  ) => {
    if (event.key === 'Enter') {
      handleClick(res);
    }
  };

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  return (
    <div className={styles.searchContainer}>
      <Input
        handleKeyPress={handleKeyPress}
        inputValue={inputValue}
        onHandleChange={onHandleChange}
      />
      <Button handleClick={handleClick} inputValue={inputValue} />
    </div>
  );
};

export default SearchSection;
