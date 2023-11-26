import React, { FC, ReactNode } from 'react';

import Header from '@/components/widgets/Header/Header';
import MainSection from '@/components/widgets/MainSection/MainSection';
import { IResult } from '@/types/types';

import styles from './HomeLayout.module.css';

type HomeLayoutProps = {
  children: ReactNode;
  data?: IResult;
};

const HomeLayout: FC<HomeLayoutProps> = ({ children, data }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <MainSection data={data} />
        {children}
      </main>
    </>
  );
};

export default HomeLayout;
