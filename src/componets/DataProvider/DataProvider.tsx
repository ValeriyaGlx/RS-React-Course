import { Component, createContext, ReactNode } from 'react';
import { IResponse } from '../../types/types';

interface DataContextProps {
  data?: IResponse[];
  request?: string;
  updateData?: (field: string, newData: IResponse[]) => void;
  children?: ReactNode;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

class DataProvider extends Component<DataContextProps> {
  constructor(props: DataContextProps) {
    super(props);

    this.state = {
      data: [],
      request: '',
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
    const { data, request } = this.state;
    const { children } = this.props;

    return (
      <DataContext.Provider
        value={{
          data,
          request,
          updateData: this.updateData,
        }}
      >
        {children}
      </DataContext.Provider>
    );
  }
}

export { DataContext, DataProvider };
