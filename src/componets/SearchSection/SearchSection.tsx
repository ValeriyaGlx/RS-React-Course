import { Component } from 'react';
import styles from './SearchSection.module.css';
import getCharacters from '../../serveces/API';
import { DataContext } from '../DataProvider/DataProvider';

type SearchSectionState = {
  inputValue: string;
};

class SearchSection extends Component<object, SearchSectionState> {
  constructor(props: object) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

  componentDidMount() {
    this.handleClick('tefffff').then(() => {});
    // ???
  }

  handleChange = (value: string) => {
    this.setState({ inputValue: value });
  };

  handleClick = async (res: string) => {
    const { updateData } = this.context;
    const api = `https://rickandmortyapi.com/api/character/?name=${res}`;
    const characters = await getCharacters(api);
    updateData('data', characters.results);
    updateData('request', res);
    updateData('loading', false);
  };

  render() {
    const { inputValue } = this.state;

    return (
      <div className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          placeholder="Enter Character Name"
          value={inputValue}
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button
          className={styles.searchButton}
          onClick={() => this.handleClick(inputValue)}
        >
          Find
        </button>
      </div>
    );
  }
}

SearchSection.contextType = DataContext;

export default SearchSection;
