import { Component } from 'react';

import { DataContext } from '../DataProvider/DataProvider';
import CharacterCard from '../CharacterCard/CharacterCard';
import NotFoundSection from '../NotFoundSection/NotFoundSection';
import Spinner from '../Spinner/Spinner';
import { DataContextType, IResponse } from '../../types/types';

import styles from './MainSection.module.css';

type MainSectionState = {
  loading: boolean;
};

class MainSection extends Component<object, MainSectionState> {
  renderCharacterCards(context: DataContextType | undefined) {
    if (context?.loading) {
      return <Spinner />;
    }
    return context?.data ? (
      <section className={styles['cards-container']}>
        {context.data.map((character: IResponse) => (
          <CharacterCard
            key={character.id}
            character={character}
            request={context.request}
          />
        ))}
      </section>
    ) : (
      <section className={styles['cards-container']}>
        <NotFoundSection />
      </section>
    );
  }

  render() {
    return (
      <DataContext.Consumer>
        {(context) => (
          <main className={styles.main}>
            <h1>
              Search Results{' '}
              <span className={styles.request}>{context?.request}</span>:
            </h1>
            {this.renderCharacterCards(context)}
          </main>
        )}
      </DataContext.Consumer>
    );
  }
}

export default MainSection;
