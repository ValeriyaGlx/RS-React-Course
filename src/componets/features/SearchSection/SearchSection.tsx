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
  const { getAllCharacters } = useCharacterSearch(inputValue);

  const handleClick = () => getAllCharacters();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  useEffect(() => handleClick(), []);

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  return (
    <div className={styles.searchContainer}>
      <Input
        handleKeyPress={handleKeyPress}
        inputValue={inputValue}
        onHandleChange={onHandleChange}
      />
      <Button handleClick={handleClick} />
    </div>
  );
};

export default SearchSection;
