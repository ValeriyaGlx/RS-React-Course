import fetchMock from 'jest-fetch-mock';
import { act, fireEvent, screen, waitFor } from '@testing-library/react';

import { mockResult } from '../../__mocks__/mockResponce';
import renderWithRouterAndProvider from '../utils/renderWithRouterAndProvider';
import MainSection from '../../componets/widgets/MainSection/MainSection';

describe('MainSection', () => {
  let container: HTMLElement;
  beforeEach(async () => {
    fetchMock.enableMocks();
    fetchMock.mockResponseOnce(JSON.stringify(mockResult));

    await act(async () => {
      const result = await renderWithRouterAndProvider(<MainSection />);
      container = result.container;
    });
  });
  test('Check that character cards are loaded immediately after rendering the page', () => {
    const cardContainers = container.querySelectorAll('.cardContainer');
    expect(cardContainers.length).toBe(5);

    const firstCard = cardContainers[0];
    expect(firstCard).toHaveTextContent('test1');
  });

  test('Check that clicking the pagination button triggers isFetching', async () => {
    const paginationButton = screen.getByTestId('next-page');

    fireEvent.click(paginationButton);

    await waitFor(() => {
      const spinnerElement = container.querySelector('.spinner');
      expect(spinnerElement).toBeInTheDocument();
    });
  });
});
