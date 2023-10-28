import { Component } from 'react';
import styles from './SearchSection.module.css';
import getCharacters from '../../serveces/API';
import { DataContext } from '../DataProvider/DataProvider';
import setDataLocalStorage, {
  getDataLocalStorage,
} from '../../serveces/localStorage';

type SearchSectionState = {
  inputValue: string;
};

class SearchSection extends Component<object, SearchSectionState> {
  constructor(props: object) {
    super(props);

    this.state = {
      inputValue: getDataLocalStorage('characterSearch'),
    };
  }

  componentDidMount() {
    const value = getDataLocalStorage('characterSearch');
    this.handleClick(value);
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
    setDataLocalStorage('characterSearch', res);
  };

  handleKeyPress = (event: KeyboardEvent, res: string) => {
    if (event.key === 'Enter') {
      this.handleClick(res);
    }
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
          onKeyDown={(e) => this.handleKeyPress(e, inputValue)}
        />
        <button
          className={styles.searchButton}
          onClick={() => this.handleClick(inputValue)}
        >
          Search
        </button>
      </div>
    );
  }
}

SearchSection.contextType = DataContext;

export default SearchSection;
