import { Outlet } from 'react-router-dom';

import { DataProvider } from '../../App/DataProvider/DataProvider';
import Header from '../../widgets/Header/Header';
import MainSection from '../../widgets/MainSection/MainSection';

const Layout = () => {
  return (
    <>
      <DataProvider>
        <Header />
        <MainSection />
      </DataProvider>
      <aside>
        IM OUTLET
        <Outlet />
      </aside>
    </>
  );
};

export default Layout;
