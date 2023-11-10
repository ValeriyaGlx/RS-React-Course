import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';

import ContentContainer from '../../../componets/shared/UI/ContentContainer/ContentContainer';
import { DataContextType } from '../../../types/types';
import {
  mockAddedCharacters,
  mockCharactersList,
} from '../../../__mocks__/mockResponce';
import {
  DEFAULT_CARDS,
  DEFAULT_PAGE,
} from '../../../componets/shared/constants/constants';
import renderWithRouteAndContext from '../../utils/renderWithRouteAndContext';

const mockContextIfCardsFound: DataContextType = {
  data: mockCharactersList,
  request: '',
  currentPage: DEFAULT_PAGE,
  totalPages: DEFAULT_PAGE,
  numberOfCards: DEFAULT_CARDS,
  loading: false,
  updateData: jest.fn(),
};

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
});
