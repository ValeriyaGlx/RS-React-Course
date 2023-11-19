import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useGetSingleCharacterQuery } from '../../shared/api/getCharactersApiSlice';
import { ISingleResponse } from '../../../types/types';
import NotFoundSection from '../../shared/UI/NotFoundSection/NotFoundSection';
import Spinner from '../../shared/UI/Spinner/Spinner';
import { setValue } from '../../features/SearchSection/searchSectionSlice';
import { useAppDispatch } from '../../App/store/hooks';

import CardInfo from './UI/CardInfo';
import styles from './CardInfo.module.css';

const SingleCharacterCard = () => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const [cardInfo, setCardInfo] = useState<ISingleResponse | null>(null);
  const [openCard, setOpenCard] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useAppDispatch();

  const { data, isError, isLoading } = useGetSingleCharacterQuery({
    slug: pathname,
  });

  useEffect(() => {
    setIsLoaded(true);
    const card = data?.data.attributes as ISingleResponse;
    setCardInfo(card);
    if (pathname) {
      setOpenCard(true);
    }
    dispatch(setValue({ key: 'isLoadingSingleCharacter', value: isLoading }));
  }, [data]);

  const closeSideBar = () => {
    setOpenCard(false);
    setTimeout(() => navigate(`/${search}`), 300);
  };

  return (
    <>
      {isLoaded && <Spinner />}
      <aside
        className={[styles.container, openCard ? styles.opened : ''].join(' ')}
        onClick={(e) => e.stopPropagation()}
        onTransitionEnd={() => setIsLoaded(false)}
        aria-hidden="true"
      >
        <div
          className={styles.background}
          onClick={closeSideBar}
          aria-hidden="true"
        >
          {isError && <NotFoundSection />}
        </div>
        <CardInfo closeSideBar={closeSideBar} cardInfo={cardInfo} />
      </aside>
    </>
  );
};

export default SingleCharacterCard;
