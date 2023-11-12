import '@testing-library/jest-dom';

import fetchMock from 'jest-fetch-mock';

import {
  getCharacters,
  getSingleCharacter,
} from '../../../componets/shared/api';
import { mockResult, mockSingleResult } from '../../../__mocks__/mockResponce';
import URL from '../../../componets/shared/constants/constants';

describe('API functions', () => {
  beforeEach(() => {
    fetchMock.mockClear();
    fetchMock.enableMocks();
  });
  test('Check getDefaultCharacters sends request', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockResult));
    const result = await getCharacters();
    expect(result).toEqual(mockResult);
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
});
