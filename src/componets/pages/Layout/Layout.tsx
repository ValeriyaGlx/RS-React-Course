import { Outlet } from 'react-router-dom';

import { DataProvider } from '../../App/DataProvider/DataProvider';
import Header from '../../widgets/Header/Header';
import MainSection from '../../widgets/MainSection/MainSection';

import styles from './Layout.module.css';

const Layout = () => {
  return (
    <DataProvider>
      <Header />
      <main className={styles.main}>
        <MainSection />
        <Outlet />
      </main>
    </DataProvider>
  );
};

export default Layout;
