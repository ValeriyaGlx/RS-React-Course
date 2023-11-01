import { createContext, FC, ReactNode, useState } from 'react';

import { DataContextType, IResponse } from '../../types/types';

type DataContextProps = {
  children: ReactNode;
};

const initialState = {
  data: [],
  request: '',
  loading: true,
};

const DataContext = createContext<DataContextType | undefined>(undefined);

const DataProvider: FC<DataContextProps> = ({ children }) => {
  const [dataContext, setDataContext] = useState(initialState);

  const updateData = (
    field: string,
    newData: IResponse[] | string | undefined
  ) => {
    setDataContext((prevState) => {
      return {
        ...prevState,
        [field]: newData,
      };
    });
  };

  const { data, request, loading } = dataContext;

  return (
    <DataContext.Provider
      value={{
        data,
        request,
        loading,
        updateData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
