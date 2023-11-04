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
  const [pageSize, setPageSize] = useState(5);
  const totalPages = context?.totalPages ?? context?.currentPage;

  const changeNumberOfCards = (btn: number) => {
    setPageSize(btn);
  };

  const onPageChange = async (page: number) => {
    const characters = await getCharacters(
      context?.request as string,
      page,
      pageSize
    );
    setCards((characters as IResult).data);
    setCurrentPage(page);
  };

  return (
    <section className={styles['content-container']}>
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
