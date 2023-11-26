import { FC } from 'react';

import { IResponse } from '@/types/types';
import CharacterCard from '@/components/shared/UI/CharacterCard/CharacterCard';
import NumbersOfCardsButtons from '@/components/shared/UI/NumbersOfCardsButtons/NumbersOfCardsButtons';
import Pagination from '@/components/features/Pagination/Pagination';

import styles from './CardsContainer.module.css';

type CardsContainerProps = {
  cards: IResponse[] | undefined;
  totalPages?: number;
};

const CardsContainer: FC<CardsContainerProps> = ({ cards, totalPages }) => {
  return (
    <>
      <NumbersOfCardsButtons />
      <div className={styles.cardsContainer}>
        {cards?.map((character: IResponse) => (
          <CharacterCard
            key={character.attributes.slug}
            character={character}
          />
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </>
  );
};

export default CardsContainer;
