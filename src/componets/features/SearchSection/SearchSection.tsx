import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { DataContext } from '../../App/DataProvider/DataProvider';
import setDataLocalStorage, {
  getDataLocalStorage,
} from '../../shared/lib/localStorage';
import { getCharacters } from '../../shared/api';
import { DEFAULT_PAGE } from '../../shared/constants/constants';

import styles from './SearchSection.module.css';

const SearchSection = () => {
  const [inputValue, setInputValue] = useState(
    getDataLocalStorage('characterSearch')
  );
  const context = useContext(DataContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') as string;

  const setInitSearchParams = () => {
    if (searchParams.has('page')) {
      setSearchParams({ page: String(DEFAULT_PAGE) });
    }
  };

  const handleClick = async (res: string) => {
    const updateData = context?.updateData;

    if (updateData) {
      updateData({ loading: true });
      const characters = await getCharacters(res, page);

      if (typeof characters !== 'number') {
        updateData({
          data: characters.data,
          totalPages: characters.meta.pagination.last,
          request: res,
          currentPage: characters.meta.pagination.current,
        });
      } else {
        updateData({ data: undefined });
      }
      updateData({ loading: false });
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
      setInitSearchParams();
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
        onClick={() => {
          handleClick(inputValue.trim());
          setInitSearchParams();
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchSection;