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
  const [numberOfCards, setNumberOfCards] = useState(DEFAULT_CARDS);
  const totalPagesContext = context?.totalPages ?? context?.currentPage;
  const updatedData = context?.updateData;
  const [totalPages, setTotalPages] = useState(totalPagesContext);

  const onPageChange = async (page: number) => {
    await getCharacters(context?.request as string, page, numberOfCards).then(
      (characters) => {
        setCards((characters as IResult).data);
        setCurrentPage(page);
      }
    );
  };

  const changeNumberOfCards = async (size: number) => {
    setNumberOfCards(size);
    await getCharacters(context?.request as string, DEFAULT_PAGE, size).then(
      (characters) => {
        setCards((characters as IResult).data);
        setCurrentPage(DEFAULT_PAGE);

        if (typeof characters !== 'number' && updatedData) {
          const pages = characters.meta.pagination;
          setTotalPages(pages.last);
          setCurrentPage(pages.current);
          updatedData({ totalPages: pages.last, currentPage: pages.current });
        }
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
