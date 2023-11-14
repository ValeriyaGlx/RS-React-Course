import { useContext } from 'react';

import { DataContext } from '../../../App/DataProvider/DataProvider';
import { DataContextType } from '../../../../types/types';
import setDataLocalStorage from '../../../shared/lib/localStorage';
import { getCharacters } from '../../../shared/api';

import useStartedSearchParams from './useStartedSearchParams';

const useCharacterSearch = () => {
  const context = useContext(DataContext);
  const { numberOfCards, updateData } = context as DataContextType;
  const { page, setInitSearchParams } = useStartedSearchParams();

  const getAllCharacters = async (res: string) => {
    setDataLocalStorage('characterSearch', res);
    setInitSearchParams();

    if (updateData) {
      updateData({ loading: true });
      const characters = await getCharacters(res, page, numberOfCards);

      if (typeof characters !== 'number') {
        const { last, current } = characters.meta.pagination;
        updateData({
          data: characters.data,
          totalPages: last,
          request: res,
          currentPage: current,
        });
      } else {
        updateData({ data: undefined });
      }
      updateData({ loading: false });
    }
  };

  return { getAllCharacters };
};

export default useCharacterSearch;
