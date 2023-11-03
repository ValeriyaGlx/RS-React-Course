import { DataProvider } from '../App/DataProvider/DataProvider';
import Header from '../widgets/Header/Header';
import MainSection from '../widgets/MainSection/MainSection';

const MainPage = () => {
  return (
    <DataProvider>
      <Header />
      <MainSection />
    </DataProvider>
  );
};

export default MainPage;
