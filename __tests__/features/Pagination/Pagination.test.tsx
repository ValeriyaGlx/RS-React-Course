import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

import createMockRouter from '@/__tests__/utils/createMockRouter';

import Pagination from '../../../components/features/Pagination/Pagination';

describe('Pagination', () => {
  test('The Pagination get property from url query params.', () => {
    const router = createMockRouter({ query: { page: '5' } });
    const { container } = render(
      <RouterContext.Provider value={router}>
        <Pagination totalPages={10} />
      </RouterContext.Provider>
    );
    const paginationValue = container.querySelector('.paginationPageInfo');
    expect(paginationValue).toHaveTextContent('5 out of 10');
  });

  test('The click on pagination Next button change url query params property.', () => {
    const router = createMockRouter({ query: { page: '1' } });
    render(
      <RouterContext.Provider value={router}>
        <Pagination totalPages={10} />
      </RouterContext.Provider>
    );
    const nextPage = screen.getByTestId('next-page');

    fireEvent.click(nextPage);

    expect(router.push).toHaveBeenCalledWith({
      pathname: '/',
      query: { page: '2' },
    });
  });

  test('The click on Prev pagination button change url query params property.', () => {
    const router = createMockRouter({ query: { page: '22' } });
    render(
      <RouterContext.Provider value={router}>
        <Pagination totalPages={22} />
      </RouterContext.Provider>
    );
    const prevPage = screen.getByTestId('prev-page');

    fireEvent.click(prevPage);

    expect(router.push).toHaveBeenCalledWith({
      pathname: '/',
      query: { page: '21' },
    });
  });

  test('The click on pagination First button change url query params property.', () => {
    const router = createMockRouter({ query: { page: '22' } });
    render(
      <RouterContext.Provider value={router}>
        <Pagination />
      </RouterContext.Provider>
    );
    const firstPage = screen.getByTestId('first-page');

    fireEvent.click(firstPage);

    expect(router.push).toHaveBeenCalledWith({
      pathname: '/',
      query: { page: '1' },
    });
  });

  test('The click on pagination Last button change url query params property.', () => {
    const router = createMockRouter({ query: { page: '22' } });
    render(
      <RouterContext.Provider value={router}>
        <Pagination totalPages={10} />
      </RouterContext.Provider>
    );
    const lastPage = screen.getByTestId('last-page');

    fireEvent.click(lastPage);

    expect(router.push).toHaveBeenCalledWith({
      pathname: '/',
      query: { page: '10' },
    });
  });

  test('View default page if query "page" undefined', () => {
    const router = createMockRouter({ query: { page: undefined } });
    const { container } = render(
      <RouterContext.Provider value={router}>
        <Pagination totalPages={10} />
      </RouterContext.Provider>
    );

    const paginationValue = container.querySelector('.paginationPageInfo');
    expect(paginationValue).toHaveTextContent('1 out of 10');
  });
});
