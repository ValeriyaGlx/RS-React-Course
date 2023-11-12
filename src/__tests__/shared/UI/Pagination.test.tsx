import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';

import renderWithRouteAndContext from '../../utils/renderWithRouteAndContext';
import Pagination from '../../../componets/shared/UI/Pagination/Pagination';
import { DEFAULT_PAGE } from '../../../componets/shared/constants/constants';

const mockSearchParams = new URLSearchParams('page=1');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: () => [
    mockSearchParams,
    (params: { page: string }) => {
      mockSearchParams.set('page', params.page);
    },
  ],
}));

describe('Pagination', () => {
  test('The Pagination updates URL query parameter when page changes. Check next page.', () => {
    const { container } = renderWithRouteAndContext(
      <Pagination
        currentPage={DEFAULT_PAGE}
        onPageChange={jest.fn()}
        totalPages={DEFAULT_PAGE + 1}
      />
    );
    expect(container).toBeInTheDocument();
    const nextPage = screen.getByTestId('next-page');
    expect(mockSearchParams.get('page')).toBe('1');
    fireEvent.click(nextPage);
    expect(mockSearchParams.get('page')).toBe('2');
  });
  test('The Pagination updates URL query parameter when page changes. Check prev page.', () => {
    mockSearchParams.delete('page');
    mockSearchParams.append('page', '10');
    renderWithRouteAndContext(
      <Pagination currentPage={10} onPageChange={jest.fn()} totalPages={10} />
    );
    expect(mockSearchParams.get('page')).toBe('10');
    const prevPage = screen.getByTestId('prev-page');
    fireEvent.click(prevPage);
    expect(mockSearchParams.get('page')).toBe('9');
  });
  test('The Pagination updates URL query parameter when page changes. Check last page.', () => {
    mockSearchParams.delete('page');
    mockSearchParams.append('page', '1');
    renderWithRouteAndContext(
      <Pagination
        currentPage={DEFAULT_PAGE}
        onPageChange={jest.fn()}
        totalPages={10}
      />
    );
    expect(mockSearchParams.get('page')).toBe('1');
    const lastPage = screen.getByTestId('last-page');
    fireEvent.click(lastPage);
    expect(mockSearchParams.get('page')).toBe('10');
  });
  test('The Pagination updates URL query parameter when page changes. Check first page.', () => {
    mockSearchParams.delete('page');
    mockSearchParams.append('page', '10');
    renderWithRouteAndContext(
      <Pagination currentPage={10} onPageChange={jest.fn()} totalPages={10} />
    );
    expect(mockSearchParams.get('page')).toBe('10');
    const firstPage = screen.getByTestId('first-page');
    fireEvent.click(firstPage);
    expect(mockSearchParams.get('page')).toBe('1');
  });
});
