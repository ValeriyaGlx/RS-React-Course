import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import NotFound from '../../componets/pages/NotFound/NotFound';
import Spinner from '../../componets/shared/UI/Spinner/Spinner';

describe('NotFound Page', () => {
  let container: HTMLElement;
  beforeEach(() => {
    const result = render(
      <MemoryRouter initialEntries={['/an-invalid-route']}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Spinner />} />
        </Routes>
      </MemoryRouter>
    );
    container = result.container;
  });
  test('The 404 page is displayed when navigating to an invalid route', () => {
    const inner = screen.getByText(/Oh dear. Are you lost?/i);
    expect(inner).toBeInTheDocument();
  });
  test("Click on the 404-page's button redirects to the main page", () => {
    const button = screen.getByRole('link');
    fireEvent.click(button);
    const mainImage = container.querySelector('.spinner');
    expect(mainImage).toBeInTheDocument();
  });
});
