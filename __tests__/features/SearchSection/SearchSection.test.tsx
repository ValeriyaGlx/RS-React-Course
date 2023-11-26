import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

import createMockRouter from '@/__tests__/utils/createMockRouter';
import SearchSection from '@/components/features/SearchSection/SearchSection';

describe('SearchSection', () => {
  test('Renders the SearchSection', () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <SearchSection />
      </RouterContext.Provider>
    );

    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText('Enter Character Name');
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('Verify that clicking the Search button changes url', () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <SearchSection />
      </RouterContext.Provider>
    );

    const input = screen.getByPlaceholderText('Enter Character Name');
    fireEvent.change(input, { target: { value: 'Saved Value' } });
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(router.push).toHaveBeenCalledWith({
      pathname: '/',
      query: { page: 1, value: 'Saved Value' },
    });
  });

  test('Check that the component retrieves the value from the url upon mounting', () => {
    const router = createMockRouter({ query: { value: 'New Value' } });
    render(
      <RouterContext.Provider value={router}>
        <SearchSection />
      </RouterContext.Provider>
    );
    const input = screen.getByPlaceholderText('Enter Character Name');
    expect(input).toHaveValue('New Value');
  });
  test('Verify that pushing on the Enter keyboard dispatch input value', () => {
    const router = createMockRouter({ query: { value: 'New Value' } });
    render(
      <RouterContext.Provider value={router}>
        <SearchSection />
      </RouterContext.Provider>
    );
    const input = screen.getByPlaceholderText('Enter Character Name');
    fireEvent.change(input, { target: { value: 'Testing Value' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(router.push).toHaveBeenCalledWith({
      pathname: '/',
      query: { page: 1, value: 'Testing Value' },
    });
  });
});
