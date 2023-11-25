'use client';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import { URL } from '@/components/shared/constants/constants';

import { IResult, ISingleResult } from '../../../types/types';

type CharactersQueryParams = {
  inputValue?: string;
  page?: number | string;
  size?: string;
};

type SingleCharacterQueryParams = {
  slug: string;
};

export const getCharactersApi = createApi({
  reducerPath: 'getCharacters',
  tagTypes: ['Characters'],
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    fetchFn: (url: RequestInfo, options?: RequestInit): Promise<Response> =>
      fetch(url, options),
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (build) => ({
    getCharacters: build.query<IResult, CharactersQueryParams>({
      query: ({ inputValue, page, size }) =>
        `?filter[name_cont]=${inputValue}&page[number]=${page}&page[size]=${size}`,
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: 'Characters' as const,
                id,
              })),
              { type: 'Characters', id: 'PARTIAL-LIST' },
            ]
          : [{ type: 'Characters', id: 'PARTIAL-LIST' }],
    }),
    getSingleCharacter: build.query<ISingleResult, SingleCharacterQueryParams>({
      query: ({ slug }) => slug,
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetSingleCharacterQuery,
  util: { getRunningQueriesThunk },
} = getCharactersApi;

export const { getCharacters, getSingleCharacter } = getCharactersApi.endpoints;
