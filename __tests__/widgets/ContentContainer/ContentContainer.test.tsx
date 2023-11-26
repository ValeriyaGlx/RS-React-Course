import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

import createMockRouter from '@/__tests__/utils/createMockRouter';
import ContentContainer from '@/components/widgets/ContentContainer/ContentContainer';
import { mockResult } from '@/__mocks__/mockResponce';

describe('ContentContainer', () => {
  test('ContentContainer renders the default number of cards (5)', () => {
    const router = createMockRouter({});
    const { container } = render(
      <RouterContext.Provider value={router}>
        <ContentContainer data={mockResult} totalPages={5} />
      </RouterContext.Provider>
    );
    const contentContainer = container.querySelector('.cardsContainer');
    expect(contentContainer?.children.length).toBe(5);
    expect(contentContainer?.children.length).not.toBe(10);
  });
  test('Check that an appropriate message is displayed if no cards are present.', () => {
    const mockContextIfNoCards = {
      ...mockResult,
      data: [],
    };

    const router = createMockRouter({});
    const { container } = render(
      <RouterContext.Provider value={router}>
        <ContentContainer data={mockContextIfNoCards} totalPages={5} />
      </RouterContext.Provider>
    );
    const contentContainer = container.querySelector('.cardsContainer');
    const message = screen.getByText(/Nothing Not Found/i);
    expect(message).toBeInTheDocument();
    expect(contentContainer?.children.length).not.toBe(5);
  });

  test('changeNumberOfCards updates url correctly', () => {
    const router = createMockRouter({});
    const { container } = render(
      <RouterContext.Provider value={router}>
        <ContentContainer data={mockResult} totalPages={5} />
      </RouterContext.Provider>
    );
    const buttons = container.querySelectorAll('.button');
    const changeNumButton = buttons[1];
    fireEvent.click(changeNumButton);
    expect(router.push).toHaveBeenCalledWith({
      pathname: '/',
      query: { size: '10', page: 1 },
    });
  });
});
