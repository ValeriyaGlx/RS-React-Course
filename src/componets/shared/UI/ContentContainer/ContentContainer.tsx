import { FC, useState } from 'react';

import { DataContextType, IResult } from '../../../../types/types';
import NotFoundSection from '../NotFoundSection/NotFoundSection';
import { getCharacters } from '../../api';
import CardsContainer from '../CardsContainer/CardsContainer';

import styles from './ContentContainer.module.css';

type CardsContainerProps = {
  context: DataContextType | undefined;
};
const ContentContainer: FC<CardsContainerProps> = ({ context }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cards, setCards] = useState(context?.data);
  const totalPages = context?.totalPages ?? context?.currentPage;
  const onPageChange = async (page: number) => {
    await getCharacters(context?.request as string, page, 5).then(
      (characters) => {
        setCards((characters as IResult).data);
        setCurrentPage(page);
      }
    );
  };

  const changeNumberOfCards = async (size: number) => {
    await getCharacters(context?.request as string, 1, size).then(
      (characters) => {
        setCards((characters as IResult).data);
        setCurrentPage(1);
      }
    );
  };

  return (
    <section className={styles.contentContainer}>
      {context?.data.length !== 0 ? (
        <CardsContainer
          cards={cards}
          request={context?.request ?? ''}
          currentPage={currentPage}
          totalPages={totalPages ?? 1}
          onPageChange={onPageChange}
          changeNumberOfCards={changeNumberOfCards}
        />
      ) : (
        <NotFoundSection />
      )}
    </section>
  );
};

export default ContentContainer;
