import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

import { ISingleResponse } from '@/types/types';
import createMockRouter from '@/__tests__/utils/createMockRouter';
import CardInfo from '@/components/widgets/CardInfo/CardInfo';

const mockCardInfo: ISingleResponse = {
  slug: 'slug',
  name: 'name',
  gender: null,
  species: null,
  blood_status: null,
};

describe('CardInfo', () => {
  test('Check CardInfo displays "unknown" for null or undefined properties', () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <CardInfo cardInfo={mockCardInfo} />
      </RouterContext.Provider>
    );
    expect(screen.getByText('Gender: unknown')).toBeInTheDocument();
    expect(screen.getByText('Species: unknown')).toBeInTheDocument();
    expect(screen.getByText('Blood status: unknown')).toBeInTheDocument();
  });
});
