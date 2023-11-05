import { createContext, FC, ReactNode, useState } from 'react';

import { DataContextType } from '../../../types/types';
import { DEFAULT_CARDS, DEFAULT_PAGE } from '../../shared/constants/constants';

type DataContextProps = {
  children: ReactNode;
};

const initialState = {
  data: [],
  request: '',
  loading: true,
  totalPages: DEFAULT_PAGE,
  currentPage: DEFAULT_PAGE,
  numberOfCards: DEFAULT_CARDS,
};

const DataContext = createContext<DataContextType | undefined>(undefined);

const DataProvider: FC<DataContextProps> = ({ children }) => {
  const [dataContext, setDataContext] = useState(initialState);

  const updateData = (newData: Partial<typeof DataContext>) => {
    setDataContext((prevState) => {
      return {
        ...prevState,
        ...newData,
      };
    });
  };

  const { data, request, loading, totalPages, currentPage, numberOfCards } =
    dataContext;

  return (
    <DataContext.Provider
      value={{
        data,
        request,
        loading,
        updateData,
        totalPages,
        currentPage,
        numberOfCards,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
