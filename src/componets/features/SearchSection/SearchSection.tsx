import React, { useEffect, useState } from 'react';

import { getDataLocalStorage } from '../../shared/lib/localStorage';
import { useAppDispatch } from '../../App/store/hooks';

import styles from './SearchSection.module.css';
import Input from './ui/Input';
import Button from './ui/Button';
import useCharacterSearch from './hooks/useCharacterSearch';
import useStartedSearchParams from './hooks/useStartedSearchParams';
import { setValue } from './searchSectionSlice';

const SearchSection = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState(
    getDataLocalStorage('characterSearch')
  );
  const { getAllCharacters } = useCharacterSearch(inputValue);
  const { page } = useStartedSearchParams();

  const handleClick = () => getAllCharacters();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  useEffect(() => {
    dispatch(setValue({ key: 'currentPage', value: page }));
  }, []);

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
