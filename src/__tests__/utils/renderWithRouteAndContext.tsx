import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { DataContext } from '../../componets/App/DataProvider/DataProvider';
import {
  DEFAULT_CARDS,
  DEFAULT_PAGE,
} from '../../componets/shared/constants/constants';

const initialState = {
  data: [],
  request: '',
  loading: true,
  totalPages: DEFAULT_PAGE,
  currentPage: DEFAULT_PAGE,
  numberOfCards: DEFAULT_CARDS,
  updateData: () => {},
};

function renderWithRouteAndContext(component: ReactElement) {
  return render(
    <MemoryRouter>
      <DataContext.Provider value={initialState}>
        {component}
      </DataContext.Provider>
    </MemoryRouter>
  );
}

export default renderWithRouteAndContext;
