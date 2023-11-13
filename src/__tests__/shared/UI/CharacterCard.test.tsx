import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import { fireEvent, act } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';

import URL from '../../../componets/shared/constants/constants';
import renderWithRouteAndContext from '../../utils/renderWithRouteAndContext';
import CharacterCard from '../../../componets/shared/UI/CharacterCard/CharacterCard';
import {
  mockSingleCard,
  mockSingleResult,
} from '../../../__mocks__/mockResponce';
import CardInfo from '../../../componets/pages/CardInfo/CardInfo';

describe('CharacterCard', () => {
  test('The CharacterCard component renders the relevant card data', () => {
    const { container } = renderWithRouteAndContext(
      <CharacterCard character={mockSingleCard} request="" />
    );
    const { image, name } = mockSingleCard.attributes;
    const img = container.querySelector('.card-image');
    const inner = container.querySelector('h4');
    expect(img).toHaveAttribute('src', image);
    expect(inner).toHaveTextContent(name);
  });

  test("The CharacterCard image rendered backup image if response haven't image", () => {
    const mockSingleCardWithoutImage = {
      ...mockSingleCard,
      attributes: {
        ...mockSingleCard.attributes,
        image: undefined,
      },
    };
    const { container } = renderWithRouteAndContext(
      <CharacterCard character={mockSingleCardWithoutImage} request="" />
    );
    const img = container.querySelector('.card-image');
    expect(img).toBeInTheDocument();
  });
});

describe('Click on CharacterCard', () => {
  beforeEach(() => {
    fetchMock.enableMocks();
    fetchMock.mockResponseOnce(JSON.stringify(mockSingleResult));
  });

  test('Clicking on a card opens a detailed card component', async () => {
    const { container } = renderWithRouteAndContext(
      <Routes>
        <Route
          path="/"
          element={<CharacterCard character={mockSingleCard} request="" />}
        />
        <Route path={mockSingleCard.attributes.slug} element={<CardInfo />} />
      </Routes>
    );
    const link = container.querySelector('.cardContainer');
    await act(() => fireEvent.click(link as Element));
    const cardInfoAside = container.querySelector('aside');

    expect(cardInfoAside).toBeInTheDocument();
    expect(cardInfoAside).toHaveClass('opened');
  });
  test('Check that clicking triggers an additional api call to fetch detailed information', async () => {
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(`${URL}/slug`);
  });
});
