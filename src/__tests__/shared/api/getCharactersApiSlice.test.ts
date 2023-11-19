import { renderHook, waitFor } from '@testing-library/react';

import {
  useGetCharactersQuery,
  useGetSingleCharacterQuery,
} from '../../../componets/shared/api/getCharactersApiSlice';
import { Wrapper } from '../../utils/renderWithRouterAndProvider';
import { mockResult, mockSingleCard } from '../../../__mocks__/mockResponce';

jest.mock('../../../componets/shared/api/getCharactersApiSlice', () => ({
  ...jest.requireActual('../../../componets/shared/api/getCharactersApiSlice'),
  useGetCharactersQuery: jest.fn(),
  useGetSingleCharacterQuery: jest.fn(),
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

const useGetSingleCharacterQueryMock = useGetSingleCharacterQuery as jest.Mock;

describe('useGetSingleCharacterQuery', () => {
  test('useGetSingleCharacterQuery get success response from server', async () => {
    useGetSingleCharacterQueryMock.mockReturnValue({
      data: mockSingleCard,
      isError: null,
      isLoading: false,
      isSuccess: true,
    });

    const { result } = renderHook(() => useGetSingleCharacterQuery(''), {
      wrapper: Wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toBe(mockSingleCard);
    expect(useGetSingleCharacterQuery).toHaveBeenCalledWith('');
  });

  test('useGetSingleCharacterQuery get error response from server', async () => {
    useGetSingleCharacterQueryMock.mockReturnValue({
      data: [],
      isError: true,
      isLoading: false,
    });

    const { result } = renderHook(() => useGetSingleCharacterQuery(''), {
      wrapper: Wrapper,
    });
    await waitFor(() => expect(result.current.isError).toBe(true));
    expect(result.current.data).toStrictEqual([]);
  });
});
