import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getSingleCharacter } from '../../shared/api';
import { ISingleResponse, ISingleResult } from '../../../types/types';
import logoIfNull from '../../../assets/images/incognito.png';

import styles from './CardInfo.module.css';

const CardInfo = () => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const [cardInfo, setCardInfo] = useState<ISingleResponse | null>(null);
  const [openCard, setOpenCard] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res: ISingleResult = await getSingleCharacter(pathname);
      const card: ISingleResponse = res.data.attributes;
      setCardInfo(card);
      if (pathname) {
        setOpenCard(true);
      }
    };
    fetchData();
  }, [pathname]);

  const closeSideBar = () => {
    setOpenCard(false);
    setTimeout(() => navigate(`/${search}`), 100);
  };

  return (
    <div
      className={styles.background}
      onClick={closeSideBar}
      aria-hidden="true"
    >
      <aside
        className={[styles.container, openCard ? styles.opened : ''].join(' ')}
        onClick={(e) => e.stopPropagation()}
        aria-hidden="true"
      >
        {cardInfo && (
          <div className={styles.card}>
            <button
              onClick={closeSideBar}
              className={styles.closeButton}
              aria-hidden="true"
            />
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={cardInfo.image ?? logoIfNull}
                alt="card"
              />
            </div>
            <h2 className={styles.inner}>{cardInfo.name}</h2>
            <div>Gender: {cardInfo.gender ?? 'unknown'}</div>
            <div>Species: {cardInfo.species ?? 'unknown'}</div>
            <div>Blood status: {cardInfo.blood_status ?? 'unknown'}</div>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CardInfo;
