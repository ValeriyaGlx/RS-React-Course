import React, { FC, ReactNode } from 'react';

import Header from '@/components/widgets/Header/Header';
import MainSection from '@/components/widgets/MainSection/MainSection';
import { IResult } from '@/types/types';

type HomeLayoutProps = {
  children: ReactNode;
  data?: IResult;
};

const HomeLayout: FC<HomeLayoutProps> = ({ children, data }) => {
  return (
    <>
      <Header />
      <main>
        <MainSection data={data} />
        {children}
      </main>
    </>
  );
};
export default HomeLayout;
