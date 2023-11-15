import '@testing-library/jest-dom';

import { fireEvent, screen, act } from '@testing-library/react';

import ContentContainer from '../../../componets/widgets/ContentContainer/ContentContainer';
import { DataContextType } from '../../../types/types';
import {
  mockAddedCharacters,
  mockCharactersList,
  mockResult,
} from '../../../__mocks__/mockResponce';
import {
  DEFAULT_CARDS,
  DEFAULT_PAGE,
} from '../../../componets/shared/constants/constants';
import renderWithRouteAndContext from '../../utils/renderWithRouteAndContext';
import * as api from '../../../componets/shared/api';

const mockContextIfCardsFound: DataContextType = {
  data: mockCharactersList,
  request: '',
  currentPage: DEFAULT_PAGE,
  totalPages: 10,
  numberOfCards: DEFAULT_CARDS,
  loading: false,
  updateData: jest.fn(),
};

jest.mock('../../../componets/shared/api', () => ({
  getCharacters: jest.fn(() => Promise.resolve(mockResult)),
}));

const getCharactersSpy = jest.spyOn(api, 'getCharacters');

describe('ContentContainer', () => {
  test('ContentContainer renders the default number of cards (5)', () => {
    const { container } = renderWithRouteAndContext(
      <ContentContainer context={mockContextIfCardsFound} />
    );
    const contentContainer = container.querySelector('.cardsContainer');
    expect(contentContainer?.children.length).toBe(5);
    expect(contentContainer?.children.length).not.toBe(10);
  });
  test('ContentContainer renders the different number of cards (10)', () => {
    const mockContextIfChangeCards: DataContextType = {
      ...mockContextIfCardsFound,
      data: [...mockCharactersList, ...mockAddedCharacters],
      numberOfCards: 10,
    };
    const { container } = renderWithRouteAndContext(
      <ContentContainer context={mockContextIfChangeCards} />
    );
    const newContentContainer = container.querySelector('.cardsContainer');

    expect(newContentContainer?.children.length).toBe(10);
    expect(newContentContainer?.children.length).not.toBe(5);
  });
  test('Check that an appropriate message is displayed if no cards are present.', () => {
    const mockContextIfNoCards: DataContextType = {
      ...mockContextIfCardsFound,
      data: [],
      numberOfCards: 0,
    };

    const { container } = renderWithRouteAndContext(
      <ContentContainer context={mockContextIfNoCards} />
    );
    const contentContainer = container.querySelector('.cardsContainer');
    const message = screen.getByText(/Nothing Not Found/i);
    expect(message).toBeInTheDocument();
    expect(contentContainer?.children.length).not.toBe(5);
  });

  test('onPageChange updates state correctly', async () => {
    renderWithRouteAndContext(
      <ContentContainer context={mockContextIfCardsFound} />
    );
    const nextPage = screen.getByTestId('next-page');
    await act(async () => {
      fireEvent.click(nextPage);
    });
    expect(getCharactersSpy).toHaveBeenCalled();
  });
  test('changeNumberOfCards updates state and buttons correctly', async () => {
    const { container } = renderWithRouteAndContext(
      <ContentContainer context={mockContextIfCardsFound} />
    );
    const buttons = container.querySelectorAll('.button');
    const changeNumButton = buttons[1];
    await act(async () => {
      fireEvent.click(changeNumButton);
    });
    expect(changeNumButton).toHaveClass('active');
    expect(getCharactersSpy).toHaveBeenCalled();
  });
});
