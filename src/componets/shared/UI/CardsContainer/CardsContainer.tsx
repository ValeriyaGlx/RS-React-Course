import { FC, useState } from 'react';

import { DataContextType, IResponse, IResult } from '../../../../types/types';
import styles from '../../../widgets/MainSection/MainSection.module.css';
import CharacterCard from '../../../entities/CharacterCard/CharacterCard';
import NotFoundSection from '../NotFoundSection/NotFoundSection';
import Pagination from '../Pagination/Pagination';
import getCharacters from '../../api';

type CardsContainerProps = {
  context: DataContextType | undefined;
  size: number;
};
const CardsContainer: FC<CardsContainerProps> = ({ context, size }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cards, setCards] = useState(context?.data);

  const totalPages = context?.totalPages;

  const onPageChange = async (page: number) => {
    const characters = await getCharacters(
      context?.request as string,
      page,
      size
    );
    setCards((characters as IResult).data);
    setCurrentPage(page);
  };

  return (
    <>
      <section className={styles['cards-container']}>
        {context?.data ? (
          cards?.map((character: IResponse) => (
            <CharacterCard
              key={character.attributes.id}
              character={character}
              request={context?.request || ''}
            />
          ))
        ) : (
          <NotFoundSection />
        )}
      </section>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages ?? 1}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default CardsContainer;
