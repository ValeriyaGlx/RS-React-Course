import MainSection from '../widgets/MainSection/MainSection';
import Header from '../widgets/Header/Header';

import { DataProvider } from './DataProvider/DataProvider';

const App = () => {
  return (
    <DataProvider>
      <Header />
      <MainSection />
    </DataProvider>
  );
};

export default App;
