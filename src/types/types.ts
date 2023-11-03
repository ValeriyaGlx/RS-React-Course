export type IResponse = {
  attributes: {
    id: number;
    name: string;
    gender: string;
    image?: string;
    species: string;
    blood_status: string;
  };
};

export type IResult = {
  data: IResponse[];
  meta: {
    pagination: {
      last: number;
    };
  };
};

export type DataContextType = {
  data: IResponse[];
  request: string;
  updateData: (newData: {
    [key: string]: string | number | boolean | IResponse[] | undefined;
  }) => void;
  loading: boolean;
  totalPages: number;
};
