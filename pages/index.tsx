import { FC } from 'react';
import Head from 'next/head';

import HomeLayout from '@/components/widgets/HomeLayout';
import StarBackground from '@/components/shared/UI/StarBackground/StarBackground';
import { IResult, StarsBackgroundType } from '@/types/types';
import {
  getCharacters,
  getRunningQueriesThunk,
} from '@/components/shared/api/getCharactersApiSlice';
import { wrapper } from '@/components/widgets/store/store';
import {
  DEFAULT_CARDS,
  DEFAULT_PAGE,
} from '@/components/shared/constants/constants';
import getStarsBackground from '@/components/shared/lib/getStarsBackground';

type HomeProps = {
  stars: StarsBackgroundType;
  data: IResult | undefined;
};

const Home: FC<HomeProps> = ({ stars, data }) => {
  return (
    <>
      <Head>
        <title>Week 5</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vollkorn+SC:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <HomeLayout data={data}>
        <StarBackground stars={stars} />
      </HomeLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { value, size, page } = context.query;

    store.dispatch(
      getCharacters.initiate({
        inputValue: (value as string) ?? '',
        size: (size as string) ?? String(DEFAULT_CARDS),
        page: (page as string) ?? String(DEFAULT_PAGE),
      })
    );

    const [res] = await Promise.all(store.dispatch(getRunningQueriesThunk()));

    const stars = getStarsBackground();

    return {
      props: {
        stars,
        data: res.data,
      },
    };
  }
);

export default Home;
