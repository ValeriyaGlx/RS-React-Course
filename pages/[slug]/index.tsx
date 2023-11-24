import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import {
  getCharacters,
  getSingleCharacter,
} from '@/components/shared/api/getCharactersApiSlice';
import {
  DEFAULT_CARDS,
  DEFAULT_PAGE,
} from '@/components/shared/constants/constants';
import { IResult, ISingleResult } from '@/types/types';
import CardInfo from '@/components/widgets/CardInfo/CardInfo';
import { wrapper } from '@/components/widgets/store/store';
import HomeLayout from '@/components/widgets/HomeLayout';
import NotFound from '@/components/shared/UI/NotFound/NotFound';

import styles from './index.module.css';

type SingleCharacterCardProps = {
  data: {
    characters: IResult | undefined;
    singleCharacter: ISingleResult | undefined;
  };
};

const SingleCharacterCard: FC<SingleCharacterCardProps> = ({ data }) => {
  const router = useRouter();

  const { page, value, size } = router.query;

  const [newPage, newValue, newSize] = [
    page ?? DEFAULT_PAGE,
    value ?? '',
    size ?? DEFAULT_CARDS,
  ];

  return (
    <HomeLayout data={data.characters}>
      <aside
        className={[styles.container, styles.opened].join(' ')}
        aria-hidden="true"
      >
        <Link
          className={styles.background}
          href={`/?page=${newPage}&value=${newValue}&size=${newSize}`}
          aria-hidden="true"
        >
          {!data.singleCharacter && <NotFound />}
        </Link>
        <CardInfo cardInfo={data.singleCharacter?.data.attributes} />
      </aside>
    </HomeLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { value, size, page } = context.query;
    const { params } = context;

    if (!params || !params.slug) {
      return {
        notFound: true,
      };
    }
    const { slug } = params;

    const charactersRequest = store.dispatch(
      getCharacters.initiate({
        inputValue: (value as string) ?? '',
        size: (size as string) ?? String(DEFAULT_CARDS),
        page: (page as string) ?? String(DEFAULT_PAGE),
      })
    );

    const singleCharacterRequest = store.dispatch(
      getSingleCharacter.initiate({ slug: (slug as string) ?? '' })
    );
    const [charactersRes, singleCharacterRes] = await Promise.all([
      charactersRequest,
      singleCharacterRequest,
    ]);

    return {
      props: {
        data: {
          characters: charactersRes.data,
          singleCharacter: singleCharacterRes.data
            ? singleCharacterRes.data
            : null,
        },
      },
    };
  }
);

export default SingleCharacterCard;
