import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import URL, { DEFAULT_CARDS, DEFAULT_PAGE } from '../constants/constants';
import { IResult, ISingleResult } from '../../../types/types';

export const getCharactersApi = createApi({
  reducerPath: 'getCharacters',
  tagTypes: ['Characters'],
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    fetchFn: (url: RequestInfo, options?: RequestInit): Promise<Response> =>
      fetch(url, options),
  }),
  endpoints: (build) => ({
    getCharacters: build.query<IResult, unknown>({
      query: ({ inputValue, page, size }) =>
        `?filter[name_cont]=${inputValue ?? ''}&page[number]=${
          page ?? DEFAULT_PAGE
        }&page[size]=${size ?? DEFAULT_CARDS}`,
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
    getSingleCharacter: build.query<ISingleResult, unknown>({
      query: ({ slug }) => slug,
    }),
  }),
});

export const { useGetCharactersQuery, useGetSingleCharacterQuery } =
  getCharactersApi;
