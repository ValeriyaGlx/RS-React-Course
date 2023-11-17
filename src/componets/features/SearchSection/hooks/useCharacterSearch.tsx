import setDataLocalStorage from '../../../shared/lib/localStorage';
import { setValue } from '../searchSectionSlice';
import { useAppDispatch } from '../../../App/store/hooks';
import { LOCAL_STORAGE_KEY } from '../../../shared/constants/constants';

import useStartedSearchParams from './useStartedSearchParams';

const useCharacterSearch = (res: string) => {
  const { page, setInitSearchParams } = useStartedSearchParams();
  const dispatch = useAppDispatch();
  const getAllCharacters = () => {
    setDataLocalStorage(LOCAL_STORAGE_KEY, res);
    setInitSearchParams();
    dispatch(setValue({ key: 'inputValue', value: res.trim() }));
    dispatch(setValue({ key: 'currentPage', value: page }));
  };

  return { getAllCharacters };
};

export default useCharacterSearch;
