import { FC } from 'react';

import { IResponse } from '../../../../types/types';
import CharacterCard from '../CharacterCard/CharacterCard';
import Pagination from '../Pagination/Pagination';
import NumbersOfCardsButtons from '../NumbersOfCardsButtons/NumbersOfCardsButtons';

import styles from './CardsContainer.module.css';

type CardsContainerProps = {
  cards: IResponse[] | undefined;
  request: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  changeNumberOfCards: (btn: number) => void;
};

const CardsContainer: FC<CardsContainerProps> = ({
  cards,
  request,
  currentPage,
  totalPages,
  onPageChange,
  changeNumberOfCards,
}) => {
  return (
    <>
      <NumbersOfCardsButtons changeNumberOfCards={changeNumberOfCards} />
      <div className={styles.cardsContainer}>
        {cards?.map((character: IResponse) => (
          <CharacterCard
            key={character.attributes.slug}
            character={character}
            request={request || ''}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default CardsContainer;
