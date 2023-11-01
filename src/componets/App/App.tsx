import MainSection from '../MainSection/MainSection';
import Header from '../Header/Header';
import { DataProvider } from '../DataProvider/DataProvider';

const App = () => {
  return (
    <DataProvider>
      <Header />
      <MainSection />
    </DataProvider>
  );
};

export default App;
