export type IResponse = {
  id: string;
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
  id: string;
  data: {
    attributes: ISingleResponse;
  };
};

export type SearchSectionSliceType = {
  inputValue: string;
  size: number;
  totalPages: number;
  currentPage: number;
  isLoadingCharacters: boolean;
  isLoadingSingleCharacter: boolean;
};
