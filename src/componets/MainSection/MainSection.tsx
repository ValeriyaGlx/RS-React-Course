import { Component } from 'react';
import { DataContext } from '../DataProvider/DataProvider';
import styles from './MainSection.module.css';

class MainSection extends Component {
  render() {
    return (
      <DataContext.Consumer>
        {(context) => (
          <main>
            <h1>
              Search Results{' '}
              <span className={styles.request}>{context?.request}</span>:
            </h1>
            <section>
              {context?.data?.map((character) => (
                <div key={character.id}>{character.name}</div>
              ))}
            </section>
          </main>
        )}
      </DataContext.Consumer>
    );
  }
}

export default MainSection;
