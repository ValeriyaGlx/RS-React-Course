import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

import createMockRouter from '@/__tests__/utils/createMockRouter';
import { mockResult, mockSingleResult } from '@/__mocks__/mockResponce';
import SingleCharacterCard from '@/pages/[slug]';

const data = {
  characters: mockResult,
  singleCharacter: mockSingleResult,
};

describe('Single Card Page', () => {
  test('The SingleCharacterCard component renders the relevant card data', () => {
    const router = createMockRouter({});
    const { container } = render(
      <RouterContext.Provider value={router}>
        <SingleCharacterCard data={data} />
      </RouterContext.Provider>
    );

    const { name, image } = mockSingleResult.data.attributes;

    const cardInfo = container.querySelector('.container');
    const card = container.querySelector('.card');
    const innerContent = container.querySelector('.inner');
    const imageContent = container.querySelector('.image');
    const genderContent = screen.getByText(/gender/i);
    const speciesContent = screen.getByText(/species/i);
    const bloodStatusContent = screen.getByText(/blood_status/i);

    expect(cardInfo).toBeInTheDocument();
    expect(card).toBeInTheDocument();
    expect(innerContent).toHaveTextContent(name);
    expect(imageContent).toHaveAttribute('src', image);
    expect(genderContent).toBeInTheDocument();
    expect(speciesContent).toBeInTheDocument();
    expect(bloodStatusContent).toBeInTheDocument();
  });

  test('Clicking the close button hides the component', () => {
    const router = createMockRouter({ query: { page: '2' } });
    const { container } = render(
      <RouterContext.Provider value={router}>
        <SingleCharacterCard data={data} />
      </RouterContext.Provider>
    );
    const closeButton = container.querySelector('.closeButton');

    fireEvent.click(closeButton as Element);

    expect(router.push).toHaveBeenCalledWith('/?page=2&value=&size=5', {
      scroll: true,
    });
  });
});
