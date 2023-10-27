import { Component } from 'react';
import MainSection from '../MainSection/MainSection';
import Header from '../Header/Header';
import { DataProvider } from '../DataProvider/DataProvider';

class App extends Component {
  render() {
    return (
      <DataProvider>
        <Header />
        <MainSection />
      </DataProvider>
    );
  }
}

export default App;
