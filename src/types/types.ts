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
  error: string;
};

export type DataContextType = {
  data: IResponse[];
  request: string;
  updateData: (
    field: string,
    newData: string | IResponse[] | undefined | boolean
  ) => void;
  loading: boolean;
};
