import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

import NotFoundPage from '@/pages/404';
import createMockRouter from '@/__tests__/utils/createMockRouter';

describe('NotFound Page', () => {
  test('The 404 page is displayed when navigating to an invalid route', () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <NotFoundPage />,
      </RouterContext.Provider>
    );
    const inner = screen.getByText(/Nothing not found/i);
    expect(inner).toBeInTheDocument();
  });
  test("Click on the 404-page's button redirects to the main page with true parameters", () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <NotFoundPage />,
      </RouterContext.Provider>
    );
    const button = screen.getByRole('link');
    fireEvent.click(button);
    expect(router.push).toHaveBeenCalledWith('/?page=1&value=&size=5', {
      scroll: true,
    });
  });
});
