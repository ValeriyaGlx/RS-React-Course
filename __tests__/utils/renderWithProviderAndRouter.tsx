import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { NextRouter } from 'next/router';

import { setupStore } from '../../components/widgets/store/store';

import createMockRouter from './createMockRouter';

export const mockStore = setupStore();

export const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={mockStore}>{children}</Provider>;
};

function renderWithRouterAndProvider(
  children: ReactNode,
  params: Partial<NextRouter>
) {
  return render(
    <RouterContext.Provider value={createMockRouter(params)}>
      {Wrapper({ children })}
      {/* {children} */}
    </RouterContext.Provider>
  );
}

export default renderWithRouterAndProvider;
