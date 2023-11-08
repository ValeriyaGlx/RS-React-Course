import '@testing-library/jest-dom';

import { getCharacters } from '../componets/shared/api';

describe('getCharacterRequest', () => {
  test('getDefaultCharacters', async () => {
    const expectedResponse = {
      data: ['character-1', 'character-2', 'character-3'],
      firstName: 'User',
      lastName: 'UserLastName',
    };

    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => expectedResponse,
    });

    const result = await getCharacters('');
    expect(result).toEqual(expectedResponse);
  });
});
