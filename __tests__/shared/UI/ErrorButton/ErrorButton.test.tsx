import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import ErrorButton from '@/components/shared/UI/ErrorButton/ErrorButton';

describe('ErrorButton', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<ErrorButton />);
    const button = getByText('Avada Kedavra!');
    expect(button).toBeInTheDocument();
  });

  test('Throws an error when clicked', () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const { getByText } = render(<ErrorButton />);
    const button = getByText('Avada Kedavra!');

    expect(() => fireEvent.click(button)).toThrow('I crashed!');

    consoleErrorSpy.mockRestore();
  });
});
