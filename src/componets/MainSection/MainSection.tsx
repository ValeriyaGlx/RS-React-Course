import { Component } from 'react';
import { DataContext } from '../DataProvider/DataProvider';
import styles from './MainSection.module.css';
import CharacterCard from '../CharacterCard/CharacterCard';

class MainSection extends Component {
  render() {
    return (
      <DataContext.Consumer>
        {(context) => (
          <main className={styles.main}>
            <h1>
              Search Results{' '}
              <span className={styles.request}>{context?.request}</span>:
            </h1>
            <section className={styles['cards-container']}>
              {context?.data?.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </section>
          </main>
        )}
      </DataContext.Consumer>
    );
  }
}

export default MainSection;
