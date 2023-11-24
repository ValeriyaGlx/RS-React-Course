import { FC } from 'react';

import NotFound from '@/components/shared/UI/NotFound/NotFound';
import CardsContainer from '@/components/shared/UI/CardsContainer/CardsContainer';

import { IResult } from '../../../types/types';

import styles from './ContentContainer.module.css';

type CardsContainerProps = {
  data?: IResult;
  totalPages?: number;
};

const ContentContainer: FC<CardsContainerProps> = ({ data, totalPages }) => {
  const cards = data?.data;

  return (
    <section className={styles.contentСontainer}>
      {cards?.length !== 0 ? (
        <CardsContainer cards={cards} totalPages={totalPages} />
      ) : (
        <NotFound />
      )}
    </section>
  );
};

export default ContentContainer;
