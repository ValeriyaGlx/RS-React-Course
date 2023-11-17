import { Outlet } from 'react-router-dom';

import Header from '../../widgets/Header/Header';
import MainSection from '../../widgets/MainSection/MainSection';
import StarBackground from '../../shared/UI/StarBackground/StarBackground';

import styles from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <StarBackground />
        <MainSection />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
