import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

import { mockSingleCard } from '@/__mocks__/mockResponce';
import createMockRouter from '@/__tests__/utils/createMockRouter';
import CharacterCard from '@/components/shared/UI/CharacterCard/CharacterCard';

describe('CharacterCard', () => {
  test('The SingleCharacterCard component renders the relevant card data', () => {
    const router = createMockRouter({});
    const { container } = render(
      <RouterContext.Provider value={router}>
        <CharacterCard character={mockSingleCard} />
      </RouterContext.Provider>
    );
    const { image, name } = mockSingleCard.attributes;
    const img = container.querySelector('.card-image');
    const inner = container.querySelector('h4');
    expect(img).toHaveAttribute('src', image);
    expect(inner).toHaveTextContent(name);
  });

  test("The SingleCharacterCard image rendered backup image if response haven't image", () => {
    const mockSingleCardWithoutImage = {
      ...mockSingleCard,
      attributes: {
        ...mockSingleCard.attributes,
        image: undefined,
      },
    };
    const router = createMockRouter({});
    const { container } = render(
      <RouterContext.Provider value={router}>
        <CharacterCard character={mockSingleCardWithoutImage} />
      </RouterContext.Provider>
    );
    const img = container.querySelector('.card-image');
    expect(img).toBeInTheDocument();
  });

  test('Clicking on a card opens a detailed card component', () => {
    const router = createMockRouter({});
    const { container } = render(
      <RouterContext.Provider value={router}>
        <CharacterCard character={mockSingleCard} />
      </RouterContext.Provider>
    );

    const Link = container.querySelector('.cardContainer');

    fireEvent.click(Link as Element);
    expect(router.push).toHaveBeenCalledWith('/slug', { scroll: true });
  });
});
