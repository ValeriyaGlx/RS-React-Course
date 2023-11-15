import { useContext } from 'react';

import { DataContext } from '../../App/DataProvider/DataProvider';
import Spinner from '../../shared/UI/Spinner/Spinner';
import { DataContextType } from '../../../types/types';
import ContentContainer from '../ContentContainer/ContentContainer';

import styles from './MainSection.module.css';

const MainSection = () => {
  const context = useContext(DataContext);

  const renderCharacterCards = (cnx: DataContextType | undefined) => {
    return cnx?.loading ? <Spinner /> : <ContentContainer context={context} />;
  };

  return (
    <section className={styles.container}>
      <h1>
        Search Results{' '}
        <span className={styles.request}>{context?.request}</span>:
      </h1>
      {renderCharacterCards(context)}
    </section>
  );
};

export default MainSection;
