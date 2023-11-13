import { IResponse, IResult, ISingleResponse } from '../types/types';

export const mockCharactersList = [
  {
    id: '1',
    attributes: {
      slug: 'test1',
      name: 'test1',
      gender: 'test',
      image: 'test',
      species: 'test',
      blood_status: 'test',
    },
  },
  {
    id: '2',
    attributes: {
      slug: 'test2',
      name: 'test2',
      gender: 'test',
      image: 'test',
      species: 'test',
      blood_status: 'test',
    },
  },
  {
    id: '3',
    attributes: {
      slug: 'test3',
      name: 'test3',
      gender: 'test',
      image: 'test',
      species: 'test',
      blood_status: 'test',
    },
  },
  {
    id: '4',
    attributes: {
      slug: 'test4',
      name: 'test4',
      gender: 'test',
      image: 'test',
      species: 'test',
      blood_status: 'test',
    },
  },
  {
    id: '5',
    attributes: {
      slug: 'test5',
      name: 'test5',
      gender: 'test',
      image: 'test',
      species: 'test',
      blood_status: 'test',
    },
  },
];

export const mockAddedCharacters = [
  {
    id: '6',
    attributes: {
      slug: 'test6',
      name: 'test6',
      gender: 'test',
      image: 'test',
      species: 'test',
      blood_status: 'test',
    },
  },
  {
    id: '7',
    attributes: {
      slug: 'test7',
      name: 'test7',
      gender: 'test',
      image: 'test',
      species: 'test',
      blood_status: 'test',
    },
  },
  {
    id: '8',
    attributes: {
      slug: 'test8',
      name: 'test8',
      gender: 'test',
      image: 'test',
      species: 'test',
      blood_status: 'test',
    },
  },
  {
    id: '9',
    attributes: {
      slug: 'test9',
      name: 'test9',
      gender: 'test',
      image: 'test',
      species: 'test',
      blood_status: 'test',
    },
  },
  {
    id: '10',
    attributes: {
      slug: 'test10',
      name: 'test10',
      gender: 'test',
      image: 'test',
      species: 'test',
      blood_status: 'test',
    },
  },
];

export const mockResult: IResult = {
  data: mockCharactersList,
  meta: {
    pagination: {
      last: 1,
      current: 1,
    },
  },
};

export const mockCardResponse: ISingleResponse = {
  slug: 'slug',
  name: 'name',
  gender: 'gender',
  image: 'image',
  species: 'species',
  blood_status: 'blood_status',
};

export const mockSingleCard: IResponse = {
  attributes: mockCardResponse,
};

export const mockSingleResult = {
  data: {
    attributes: mockCardResponse,
  },
};
