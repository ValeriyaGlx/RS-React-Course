import { useSearchParams } from 'react-router-dom';

import { DEFAULT_PAGE } from '../../../shared/constants/constants';

const useStartedSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') as string;

  const setInitSearchParams = () => {
    if (searchParams.has('page')) {
      setSearchParams({ page: String(DEFAULT_PAGE) });
    }
  };
  return { page, setInitSearchParams };
};

export default useStartedSearchParams;
