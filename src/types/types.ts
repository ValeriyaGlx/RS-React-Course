export type IResponse = {
  attributes: {
    slug: string;
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
      current: number;
    };
  };
};

export type ISingleResponse = {
  slug: string;
  name: string;
  gender: string;
  image?: string;
  species: string;
  blood_status: string;
};

export type ISingleResult = {
  data: {
    attributes: ISingleResponse;
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
  currentPage: number;
  numberOfCards: number;
};
