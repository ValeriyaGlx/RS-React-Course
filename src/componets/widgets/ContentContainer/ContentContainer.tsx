import { FC, useState } from 'react';

import { DataContextType, IResult } from '../../../types/types';
import NotFoundSection from '../../shared/UI/NotFoundSection/NotFoundSection';
import { getCharacters } from '../../shared/api';
import CardsContainer from '../../shared/UI/CardsContainer/CardsContainer';
import { DEFAULT_PAGE } from '../../shared/constants/constants';

import styles from './ContentContainer.module.css';

type CardsContainerProps = {
  context: DataContextType | undefined;
};
const ContentContainer: FC<CardsContainerProps> = ({ context }) => {
  const totalPagesContext = context?.totalPages ?? context?.currentPage;
  const { updateData, numberOfCards } = context as DataContextType;
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const [cards, setCards] = useState(context?.data);
  const [cardsNumber, setNumberOfCards] = useState(numberOfCards);
  const [totalPages, setTotalPages] = useState(totalPagesContext);

  const onPageChange = async (page: number) => {
    await getCharacters(context?.request as string, page, cardsNumber).then(
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

        if (typeof characters !== 'number') {
          const pages = characters.meta.pagination;
          setTotalPages(pages.last);
          setCurrentPage(pages.current);
          updateData({ totalPages: pages.last, currentPage: pages.current });
        }
      }
    );
  };

  return (
    <section className={styles.contentСontainer}>
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
