import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

import SearchSection from '../componets/features/SearchSection/SearchSection';

import renderWithRouteAndContext from './utils/renderWithRouteAndContext';

describe('SearchSection', () => {
  beforeEach(() => {
    fetchMock.enableMocks();

    fetchMock.mockResponseOnce(
      JSON.stringify({
        data: 'value',
        meta: {
          pagination: {
            last: '1',
            current: '1',
          },
        },
        request: '',
      })
    );
  });

  test('Renders the SearchSection', async () => {
    renderWithRouteAndContext(<SearchSection />);

    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText('Enter Character Name');
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});
