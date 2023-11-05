import { FC, useState } from 'react';

import { DataContextType, IResult } from '../../../../types/types';
import NotFoundSection from '../NotFoundSection/NotFoundSection';
import { getCharacters } from '../../api';
import CardsContainer from '../CardsContainer/CardsContainer';
import { DEFAULT_CARDS, DEFAULT_PAGE } from '../../constants/constants';

import styles from './ContentContainer.module.css';

type CardsContainerProps = {
  context: DataContextType | undefined;
};
const ContentContainer: FC<CardsContainerProps> = ({ context }) => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const [cards, setCards] = useState(context?.data);
  const totalPages = context?.totalPages ?? context?.currentPage;

  const onPageChange = async (page: number) => {
    await getCharacters(context?.request as string, page, DEFAULT_CARDS).then(
      (characters) => {
        setCards((characters as IResult).data);
        setCurrentPage(page);
      }
    );
  };

  const changeNumberOfCards = async (size: number) => {
    await getCharacters(context?.request as string, DEFAULT_PAGE, size).then(
      (characters) => {
        setCards((characters as IResult).data);
        setCurrentPage(DEFAULT_PAGE);
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
          totalPages={totalPages ?? DEFAULT_PAGE}
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
