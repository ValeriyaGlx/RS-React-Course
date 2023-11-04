import { useContext, useState } from 'react';

import { DataContext } from '../../App/DataProvider/DataProvider';
import Spinner from '../../shared/UI/Spinner/Spinner';
import { DataContextType } from '../../../types/types';
import CardsContainer from '../../shared/UI/CardsContainer/CardsContainer';
import { CARDS_AMOUNT as buttons } from '../../shared/constants/constants';

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

  return (
    <section>
      <h1>
        Search Results{' '}
        <span className={styles.request}>{context?.request}</span> (
        {context?.data.length} results):
      </h1>
      <div>
        Cards amount
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => {
              setPageSize(btn);
            }}
          >
            {btn}
          </button>
        ))}
      </div>
      {renderCharacterCards(context)}
    </section>
  );
};

export default MainSection;
