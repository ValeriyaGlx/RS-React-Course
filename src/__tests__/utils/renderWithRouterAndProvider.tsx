import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import { setupStore } from '../../componets/App/store/store';

export const mockStore = setupStore();

export const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={mockStore}>{children}</Provider>;
};

function renderWithRouterAndProvider(children: ReactNode) {
  return render(<MemoryRouter>{Wrapper({ children })}</MemoryRouter>);
}

export default renderWithRouterAndProvider;
