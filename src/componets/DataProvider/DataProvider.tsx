import { Component, createContext, ReactNode } from 'react';

import { IResponse } from '../../types/types';

type DataContextProps = {
  children?: ReactNode;
};

type DataContextState = {
  data: IResponse[];
  request: string;
  loading: boolean;
};

type DataContextType = {
  data: IResponse[];
  request: string;
  updateData: (field: string, newData: string | IResponse[]) => void;
  loading: boolean;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

class DataProvider extends Component<DataContextProps, DataContextState> {
  constructor(props: DataContextProps) {
    super(props);

    this.state = {
      data: [],
      request: '',
      loading: true,
    };
  }

  updateData = (field: string, newData: IResponse[] | string) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        [field]: newData,
      };
    });
  };

  render() {
    const { data, request, loading } = this.state;
    const { children } = this.props;

    return (
      <DataContext.Provider
        value={{
          data,
          request,
          loading,
          updateData: this.updateData,
        }}
      >
        {children}
      </DataContext.Provider>
    );
  }
}

export { DataContext, DataProvider };
