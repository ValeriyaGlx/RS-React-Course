import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import renderWithRouterAndProvider from '../utils/renderWithRouterAndProvider';
import CardInfo from '../../componets/pages/CardInfo/UI/CardInfo';
import { ISingleResponse } from '../../types/types';

const mockCardInfo: ISingleResponse = {
  slug: 'slug',
  name: 'name',
  gender: null,
  species: null,
  blood_status: null,
};

describe('CardInfo', () => {
  test('Check CardInfo displays "unknown" for null or undefined properties', () => {
    renderWithRouterAndProvider(
      <CardInfo cardInfo={mockCardInfo} closeSideBar={jest.fn()} />
    );
    expect(screen.getByText('Gender: unknown')).toBeInTheDocument();
    expect(screen.getByText('Species: unknown')).toBeInTheDocument();
    expect(screen.getByText('Blood status: unknown')).toBeInTheDocument();
  });
});
