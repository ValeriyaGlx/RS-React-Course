import '@testing-library/jest-dom';

import fetchMock from 'jest-fetch-mock';

import {
  getCharacters,
  getSingleCharacter,
} from '../../../componets/shared/api';
import { mockResult, mockSingleResult } from '../../../__mocks__/mockResponce';
import URL from '../../../componets/shared/constants/constants';

describe('api functions', () => {
  beforeEach(() => {
    fetchMock.mockClear();
    fetchMock.enableMocks();
  });
  test('Check getCharacters sends request', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockResult));
    const result = await getCharacters();
    expect(result).toEqual(mockResult);
    expect(fetchMock.mock.calls[0][0]).toBe(
      `${URL}?filter[name_cont]=&page[number]=1&page[size]=5`
    );
  });
  test('Check getCharacters handles error status', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 404 });
    const result = await getCharacters();
    expect(result).toBe(404);
    expect(fetchMock.mock.calls[0][0]).toBe(
      `${URL}?filter[name_cont]=&page[number]=1&page[size]=5`
    );
  });
  test('Check getSingleCharacter sends request', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockSingleResult));
    const result = await getSingleCharacter('/slug');
    expect(result).toEqual(mockSingleResult);
    expect(fetchMock.mock.calls[0][0]).toBe(`${URL}/slug`);
  });
  test('Check getSingleCharacter handles error status', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 404 });
    const result = await getSingleCharacter('/slug');
    expect(result).toBe(404);
    expect(fetchMock.mock.calls[0][0]).toBe(`${URL}/slug`);
  });
});
