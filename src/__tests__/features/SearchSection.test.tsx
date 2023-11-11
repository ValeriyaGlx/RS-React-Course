import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';

import renderWithRouteAndContext from '../utils/renderWithRouteAndContext';
import { mockResult } from '../../__mocks__/mockResponce';
import SearchSection from '../../componets/features/SearchSection/SearchSection';

jest.mock('../../componets/shared/api', () => ({
  getCharacters: jest.fn(() => Promise.resolve(mockResult)),
}));

describe('SearchSection', () => {
  const localStorageKey = 'characterSearch';

  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  test('Renders the SearchSection', () => {
    renderWithRouteAndContext(<SearchSection />);

    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText('Enter Character Name');
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('Verify that clicking the Search button saves the entered value to the local storage', () => {
    renderWithRouteAndContext(<SearchSection />);

    const input = screen.getByPlaceholderText('Enter Character Name');
    fireEvent.change(input, { target: { value: 'Saved Value' } });
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(localStorage.getItem(localStorageKey)).toBe('Saved Value');
  });

  test('Check that the component retrieves the value from the local storage upon mounting', () => {
    localStorage.setItem(localStorageKey, 'Stored Value');
    renderWithRouteAndContext(<SearchSection />);
    const input = screen.getByPlaceholderText('Enter Character Name');
    expect(input).toHaveValue('Stored Value');
  });
});
