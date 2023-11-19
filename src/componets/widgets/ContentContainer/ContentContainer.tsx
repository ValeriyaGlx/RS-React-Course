import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../App/store/hooks';
import { IResult } from '../../../types/types';
import NotFoundSection from '../../shared/UI/NotFoundSection/NotFoundSection';
import CardsContainer from '../../shared/UI/CardsContainer/CardsContainer';
import { setValue } from '../../features/SearchSection/searchSectionSlice';
import { DEFAULT_PAGE } from '../../shared/constants/constants';

import styles from './ContentContainer.module.css';

type CardsContainerProps = {
  data: IResult | undefined;
};

const ContentContainer: FC<CardsContainerProps> = ({ data }) => {
  const { inputValue, currentPage, totalPages } = useAppSelector(
    (state) => state.searchReducer
  );
  const dispatch = useAppDispatch();
  const cards = data?.data;

  const onPageChange = (page: number) => {
    dispatch(setValue({ key: 'currentPage', value: page }));
  };

  const changeNumberOfCards = (numOfCards: number) => {
    dispatch(setValue({ key: 'currentPage', value: DEFAULT_PAGE }));
    dispatch(setValue({ key: 'size', value: numOfCards }));
  };

  return (
    <section className={styles.contentСontainer}>
      {cards?.length !== 0 ? (
        <CardsContainer
          cards={cards}
          request={inputValue ?? ''}
          currentPage={currentPage}
          totalPages={totalPages ?? currentPage}
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
