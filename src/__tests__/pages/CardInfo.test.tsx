import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent, screen } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

import { mockSingleResult } from '../../__mocks__/mockResponce';
import CardInfo from '../../componets/pages/CardInfo/CardInfo';
import renderWithRouteAndContext from '../utils/renderWithRouteAndContext';

describe('CardInfo', () => {
  let container: HTMLElement;
  beforeEach(async () => {
    fetchMock.enableMocks();
    fetchMock.mockResponseOnce(JSON.stringify(mockSingleResult));

    await act(async () => {
      const result = await renderWithRouteAndContext(<CardInfo />);
      container = result.container;
    });
  });
  test('The loading indicator is displayed while fetching data', () => {
    const indicator = container.querySelector('.spinner');
    expect(indicator).toBeInTheDocument();
  });
  test('The detailed card component correctly displays the detailed card data', () => {
    const { name, image } = mockSingleResult.data.attributes;

    const cardInfo = container.querySelector('.container');
    const card = container.querySelector('.card');
    const innerContent = container.querySelector('.inner');
    const imageContent = container.querySelector('.image');
    const genderContent = screen.getByText(/gender/i);
    const speciesContent = screen.getByText(/species/i);
    const bloodStatusContent = screen.getByText(/blood_status/i);

    expect(cardInfo).toHaveClass('opened');
    expect(card).toBeInTheDocument();
    expect(innerContent).toHaveTextContent(name);
    expect(imageContent).toHaveAttribute('src', image);
    expect(genderContent).toBeInTheDocument();
    expect(speciesContent).toBeInTheDocument();
    expect(bloodStatusContent).toBeInTheDocument();
  });

  test('Clicking the close button hides the component', () => {
    const closeButton = container.querySelector('.closeButton');
    act(() => {
      fireEvent.click(closeButton as Element);
    });
    const cardInfo = container.querySelector('.container');
    expect(cardInfo).not.toHaveClass('opened');
  });
});

describe('CardInfo if response returns with error', () => {
  test('Show notFound section if response returns with error', async () => {
    fetchMock.enableMocks();
    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 404 });
    await act(async () => {
      renderWithRouteAndContext(<CardInfo />);
    });
    const message = screen.getByText(/Nothing Not Found/i);
    expect(message).toBeInTheDocument();
  });
});
