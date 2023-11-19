import '@testing-library/jest-dom';

import { fireEvent, screen, act } from '@testing-library/react';

import ContentContainer from '../../../componets/widgets/ContentContainer/ContentContainer';
import {
  mockAddedCharacters,
  mockCharactersList,
  mockResult,
} from '../../../__mocks__/mockResponce';
import renderWithRouterAndProvider, {
  mockStore,
} from '../../utils/renderWithRouterAndProvider';
import { setValue } from '../../../componets/features/SearchSection/searchSectionSlice';

const mockContextIfCardsFound = mockResult;

const dispatchSpy = jest.spyOn(mockStore, 'dispatch');

describe('ContentContainer', () => {
  test('ContentContainer renders the default number of cards (5)', () => {
    const { container } = renderWithRouterAndProvider(
      <ContentContainer data={mockContextIfCardsFound} />
    );
    const contentContainer = container.querySelector('.cardsContainer');
    expect(contentContainer?.children.length).toBe(5);
    expect(contentContainer?.children.length).not.toBe(10);
  });
  test('ContentContainer renders the different number of cards (10)', () => {
    const mockContextIfChangeCards = {
      ...mockContextIfCardsFound,
      data: [...mockCharactersList, ...mockAddedCharacters],
      size: 10,
    };
    const { container } = renderWithRouterAndProvider(
      <ContentContainer data={mockContextIfChangeCards} />
    );
    const newContentContainer = container.querySelector('.cardsContainer');

    expect(newContentContainer?.children.length).toBe(10);
    expect(newContentContainer?.children.length).not.toBe(5);
  });
  test('Check that an appropriate message is displayed if no cards are present.', () => {
    const mockContextIfNoCards = {
      ...mockContextIfCardsFound,
      data: [],
      size: 0,
    };

    const { container } = renderWithRouterAndProvider(
      <ContentContainer data={mockContextIfNoCards} />
    );
    const contentContainer = container.querySelector('.cardsContainer');
    const message = screen.getByText(/Nothing Not Found/i);
    expect(message).toBeInTheDocument();
    expect(contentContainer?.children.length).not.toBe(5);
  });

  test('onPageChange updates store correctly', async () => {
    renderWithRouterAndProvider(
      <ContentContainer data={mockContextIfCardsFound} />
    );
    await act(() => {
      mockStore.dispatch(setValue({ key: 'totalPages', value: 10 }));
    });
    const nextPage = screen.getByTestId('next-page');
    await act(async () => {
      fireEvent.click(nextPage);
    });
    expect(dispatchSpy).toHaveBeenCalledWith({
      type: 'data/setValue',
      payload: { key: 'currentPage', value: 2 },
    });
  });
  test('changeNumberOfCards updates store and buttons correctly', async () => {
    const { container } = renderWithRouterAndProvider(
      <ContentContainer data={mockContextIfCardsFound} />
    );
    const buttons = container.querySelectorAll('.button');
    const changeNumButton = buttons[1];
    await act(async () => {
      fireEvent.click(changeNumButton);
    });
    expect(changeNumButton).toHaveClass('active');
    expect(dispatchSpy).toHaveBeenCalledWith({
      type: 'data/setValue',
      payload: { key: 'size', value: 10 },
    });
  });
});
