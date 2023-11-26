import { GetServerSidePropsContext } from 'next';
import { createRequest, createResponse } from 'node-mocks-http';
import fetchMock from 'jest-fetch-mock';

import { getServerSideProps } from '@/pages/[slug]';
import { mockResult, mockSingleResult } from '@/__mocks__/mockResponce';

fetchMock.enableMocks();

const context: GetServerSidePropsContext = {
  query: { value: 'value', size: '5', page: '1' },
  params: {},
  res: createResponse(),
  req: createRequest(),
  resolvedUrl: '',
};

describe('getServerSideProps', () => {
  test('Returns notFound if slug is missing', async () => {
    const result = await getServerSideProps(context);

    expect(result).toMatchObject({
      notFound: true,
    });
  });
});

test('Returns data if slug is in arguments', async () => {
  const contextWithSlug: GetServerSidePropsContext = {
    query: { value: 'value', size: '5', page: '1' },
    params: { slug: 'slug' },
    res: createResponse(),
    req: createRequest(),
    resolvedUrl: '',
  };

  fetchMock
    .mockResponseOnce(JSON.stringify(mockResult))
    .mockResponseOnce(JSON.stringify(mockSingleResult));

  const result = await getServerSideProps(contextWithSlug);

  expect(result).toMatchObject({
    props: {
      data: {
        characters: mockResult,
        singleCharacter: mockSingleResult,
      },
    },
  });
});
