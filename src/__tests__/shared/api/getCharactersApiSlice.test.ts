import { renderHook, waitFor } from '@testing-library/react';

import { useGetCharactersQuery } from '../../../componets/shared/api/getCharactersApiSlice';
import { Wrapper } from '../../utils/renderWithRouterAndProvider';
import { mockResult } from '../../../__mocks__/mockResponce';

jest.mock('../../../componets/shared/api/getCharactersApiSlice', () => ({
  ...jest.requireActual('../../../componets/shared/api/getCharactersApiSlice'),
  useGetCharactersQuery: jest.fn(),
}));

const useGetCharactersQueryMock = useGetCharactersQuery as jest.Mock;

describe('useGetCharactersQuery', () => {
  test('useGetCharactersQuery get success response from server', async () => {
    useGetCharactersQueryMock.mockReturnValue({
      data: mockResult,
      isError: null,
      isLoading: false,
      isSuccess: true,
    });

    const { result } = renderHook(() => useGetCharactersQuery(''), {
      wrapper: Wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toBe(mockResult);
    expect(useGetCharactersQuery).toHaveBeenCalledWith('');
  });

  test('useGetCharactersQuery get error response from server', async () => {
    useGetCharactersQueryMock.mockReturnValue({
      data: [],
      isError: true,
      isLoading: false,
    });

    const { result } = renderHook(() => useGetCharactersQuery(''), {
      wrapper: Wrapper,
    });
    await waitFor(() => expect(result.current.isError).toBe(true));
    expect(result.current.data).toStrictEqual([]);
  });
});
