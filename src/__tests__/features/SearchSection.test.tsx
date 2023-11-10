import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

import renderWithRouteAndContext from '../utils/renderWithRouteAndContext';
import { mockResult } from '../../__mocks__/mockResponce';
import SearchSection from '../../componets/features/SearchSection/SearchSection';

describe('SearchSection', () => {
  beforeEach(() => {
    fetchMock.enableMocks();
    fetchMock.mockResponseOnce(JSON.stringify(mockResult));
  });

  test('Renders the SearchSection', async () => {
    renderWithRouteAndContext(<SearchSection />);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText('Enter Character Name');
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});
