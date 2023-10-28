import { Component } from 'react';
import { DataContext } from '../DataProvider/DataProvider';
import styles from './MainSection.module.css';
import CharacterCard from '../CharacterCard/CharacterCard';
import NotFoundSection from '../NotFoundSection/NotFoundSection';
import Spinner from '../Spinner/Spinner';

type MainSectionState = {
  loading: boolean;
};

class MainSection extends Component<MainSectionState> {
  render() {
    return (
      <DataContext.Consumer>
        {(context) => (
          <main className={styles.main}>
            <h1>
              Search Results{' '}
              <span className={styles.request}>{context?.request}</span>:
            </h1>
            {context?.loading ? (
              <Spinner />
            ) : (
              <section className={styles['cards-container']}>
                {context?.data?.map((character) => (
                  <CharacterCard
                    key={character.id}
                    character={character}
                    request={context?.request}
                  />
                ))}
                {!context?.data && <NotFoundSection />}
              </section>
            )}
          </main>
        )}
      </DataContext.Consumer>
    );
  }
}

export default MainSection;
