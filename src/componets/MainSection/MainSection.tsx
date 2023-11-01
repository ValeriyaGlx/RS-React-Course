import { useContext } from 'react';

import { DataContext } from '../DataProvider/DataProvider';
import Spinner from '../Spinner/Spinner';
import { DataContextType } from '../../types/types';
import CardsContainer from '../CardsContainer/CardsContainer';

import styles from './MainSection.module.css';

const MainSection = () => {
  const context = useContext(DataContext);

  const renderCharacterCards = (cnx: DataContextType | undefined) => {
    return cnx?.loading ? <Spinner /> : <CardsContainer context={context} />;
  };

  return (
    <main className={styles.main}>
      <h1>
        Search Results{' '}
        <span className={styles.request}>{context?.request}</span>:
      </h1>
      {renderCharacterCards(context)}
    </main>
  );
};

export default MainSection;
