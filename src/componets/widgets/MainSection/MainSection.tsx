import { useContext, useState } from 'react';

import { DataContext } from '../../App/DataProvider/DataProvider';
import Spinner from '../../shared/UI/Spinner/Spinner';
import { DataContextType } from '../../../types/types';
import CardsContainer from '../../shared/UI/CardsContainer/CardsContainer';
import NumbersOfCardsButtons from '../../shared/UI/NumbersOfCardsButtons/NumbersOfCardsButtons';

import styles from './MainSection.module.css';

const MainSection = () => {
  const context = useContext(DataContext);
  const [pageSize, setPageSize] = useState(5);

  const renderCharacterCards = (cnx: DataContextType | undefined) => {
    return cnx?.loading ? (
      <Spinner />
    ) : (
      <CardsContainer context={context} size={pageSize} />
    );
  };

  const changeNumberOfCards = (btn: number) => {
    setPageSize(btn);
  };

  return (
    <section>
      <h1>
        Search Results{' '}
        <span className={styles.request}>{context?.request}</span> (
        {context?.data.length} results):
      </h1>
      <div>
        <NumbersOfCardsButtons changeNumberOfCards={changeNumberOfCards} />
      </div>
      {renderCharacterCards(context)}
    </section>
  );
};

export default MainSection;
