import { renderHook, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

import { useGetCharactersQuery } from '../../../componets/shared/api/getCharactersApiSlice';
import { Wrapper } from '../../utils/renderWithRouterAndProvider';
import URL from '../../../componets/shared/constants/constants';
import { mockResult } from '../../../__mocks__/mockResponce';

fetchMock.enableMocks();

describe('useGetCharactersQuery', () => {
  beforeAll(() => {
    fetchMock.mockOnceIf(URL, () =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify({ mockResult }),
      })
    );
  });

  test('useGetCharactersQuery get response from server', async () => {
    const { result } = renderHook(() => useGetCharactersQuery(''), {
      wrapper: Wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(fetchMock).toHaveBeenCalled();
  });
});
