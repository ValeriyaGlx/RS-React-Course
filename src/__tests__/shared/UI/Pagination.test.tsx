import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';

import renderWithRouteAndContext from '../../utils/renderWithRouteAndContext';
import Pagination from '../../../componets/shared/UI/Pagination/Pagination';
import { DEFAULT_PAGE } from '../../../componets/shared/constants/constants';

const mockSearchParams = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: () => {
    return [new URLSearchParams(''), mockSearchParams];
  },
}));

describe('Pagination', () => {
  test('The Pagination updates URL query parameter when page changes', () => {
    const { container } = renderWithRouteAndContext(
      <Pagination
        currentPage={DEFAULT_PAGE}
        onPageChange={jest.fn}
        totalPages={DEFAULT_PAGE + 1}
      />
    );
    expect(container).toBeInTheDocument();
    expect(mockSearchParams).toHaveBeenCalledWith({ page: '1' });
    const nextPage = screen.getByTestId('next-page');
    fireEvent.click(nextPage);
    expect(mockSearchParams).toHaveBeenCalledWith({ page: '2' });
    fireEvent.click(nextPage);
    // expect(mockSearchParams).toHaveBeenCalledWith({ page: '3' });
    // TODO: solve issue

    // const prevPage = screen.getByTestId('prev-page');
    // fireEvent.click(prevPage);
    // expect(mockSearchParams).toHaveBeenCalledWith({ page: '1' });
  });
});
