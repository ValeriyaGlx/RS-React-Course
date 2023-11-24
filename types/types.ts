import { ReactNode } from 'react';

export type IResponse = {
  id: string;
  attributes: {
    slug: string;
    name: string;
    gender: string | null;
    image?: string;
    species: string | null;
    blood_status: string | null;
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
  gender: string | null;
  image?: string;
  species: string | null;
  blood_status: string | null;
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

export type ChildrenType = {
  children: ReactNode;
};

export type StarsBackgroundType = {
  className: string;
  style: { left: string; top: string; animationDelay: string };
  key: number;
};
