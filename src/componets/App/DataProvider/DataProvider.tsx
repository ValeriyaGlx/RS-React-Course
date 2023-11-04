import { createContext, FC, ReactNode, useState } from 'react';

import { DataContextType } from '../../../types/types';

type DataContextProps = {
  children: ReactNode;
};

const initialState = {
  data: [],
  request: '',
  loading: true,
  totalPages: 1,
  currentPage: 1,
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

  const { data, request, loading, totalPages, currentPage } = dataContext;

  return (
    <DataContext.Provider
      value={{
        data,
        request,
        loading,
        updateData,
        totalPages,
        currentPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
