import React, { useContext, useEffect, useState } from 'react';

import getCharacters from '../../shared/api/getItems';
import { DataContext } from '../../App/DataProvider/DataProvider';
import setDataLocalStorage, {
  getDataLocalStorage,
} from '../../shared/lib/localStorage';

import styles from './SearchSection.module.css';

const SearchSection = () => {
  const [inputValue, setInputValue] = useState(
    getDataLocalStorage('characterSearch')
  );
  const context = useContext(DataContext);

  const handleClick = async (res: string) => {
    const updateData = context?.updateData;

    if (updateData) {
      updateData('loading', true);
      const api = `https://rickandmortyapi.com/api/character/?page=1&name=${res}&limit=10`;
      const characters = await getCharacters(api);
      if (typeof characters !== 'number') {
        updateData('data', characters.results);
      } else {
        updateData('data', undefined);
      }
      updateData('request', res);
      updateData('loading', false);
      setDataLocalStorage('characterSearch', res);
    }
  };

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

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        placeholder="Enter Character Name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e, inputValue.trim())}
      />
      <button
        className={styles.searchButton}
        onClick={() => handleClick(inputValue.trim())}
      >
        Search
      </button>
    </div>
  );
};

export default SearchSection;
