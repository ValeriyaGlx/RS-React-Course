import '@testing-library/jest-dom';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import renderWithRouterAndProvider, {
  mockStore,
} from '../utils/renderWithRouterAndProvider';
import SearchSection from '../../componets/features/SearchSection/SearchSection';

const dispatchSpy = jest.spyOn(mockStore, 'dispatch');

describe('SearchSection', () => {
  const localStorageKey = 'characterSearch';
  beforeEach(() => {
    localStorage.clear();
  });

  test('Renders the SearchSection', () => {
    renderWithRouterAndProvider(<SearchSection />);

    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText('Enter Character Name');
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('Verify that clicking the Search button saves the entered value to the local storage', () => {
    renderWithRouterAndProvider(<SearchSection />);

    const input = screen.getByPlaceholderText('Enter Character Name');
    fireEvent.change(input, { target: { value: 'Saved Value' } });
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(localStorage.getItem(localStorageKey)).toBe('Saved Value');
  });

  test('Check that the component retrieves the value from the local storage upon mounting', () => {
    localStorage.setItem(localStorageKey, 'Stored Value');
    renderWithRouterAndProvider(<SearchSection />);
    const input = screen.getByPlaceholderText('Enter Character Name');
    expect(input).toHaveValue('Stored Value');
  });
  test('Verify that pushing on the Enter keyboard dispatch input value', async () => {
    renderWithRouterAndProvider(<SearchSection />);
    const input = screen.getByPlaceholderText('Enter Character Name');
    fireEvent.change(input, { target: { value: 'Testing Value' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    await waitFor(() => {
      expect(dispatchSpy).toHaveBeenCalledWith({
        type: 'data/setValue',
        payload: { key: 'inputValue', value: 'Testing Value' },
      });
    });
  });
});
