import { FC } from 'react';

import { DataContextType, IResponse } from '../../../../types/types';
import styles from '../../../widgets/MainSection/MainSection.module.css';
import CharacterCard from '../../../entities/CharacterCard/CharacterCard';
import NotFoundSection from '../NotFoundSection/NotFoundSection';

type CardsContainerProps = {
  context: DataContextType | undefined;
};
const CardsContainer: FC<CardsContainerProps> = ({ context }) => {
  return (
    <section className={styles['cards-container']}>
      {context?.data ? (
        context?.data.map((character: IResponse) => (
          <CharacterCard
            key={character.id}
            character={character}
            request={context.request}
          />
        ))
      ) : (
        <NotFoundSection />
      )}
    </section>
  );
};

export default CardsContainer;
