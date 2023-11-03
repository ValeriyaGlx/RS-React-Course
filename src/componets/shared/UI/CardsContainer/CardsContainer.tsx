import { FC, useState } from 'react';

import { DataContextType, IResponse } from '../../../../types/types';
import styles from '../../../widgets/MainSection/MainSection.module.css';
import CharacterCard from '../../../entities/CharacterCard/CharacterCard';
import NotFoundSection from '../NotFoundSection/NotFoundSection';
import Pagination from '../Pagination/Pagination';

type CardsContainerProps = {
  context: DataContextType | undefined;
  size: number;
};
const CardsContainer: FC<CardsContainerProps> = ({ context, size }) => {
  const pageSize = size;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    (context as DataContextType).data.length / pageSize
  );

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <section className={styles['cards-container']}>
        {context?.data ? (
          context.data?.map((character: IResponse) => (
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
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default CardsContainer;
