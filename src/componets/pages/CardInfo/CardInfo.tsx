import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getSingleCharacter } from '../../shared/api';
import { ISingleResponse, ISingleResult } from '../../../types/types';
import logoIfNull from '../../../assets/images/incognito.png';
import closeIcon from '../../../assets/icons/close-icon.svg';

import styles from './CardInfo.module.css';

const CardInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const slug = location.pathname;
  const [cardInfo, setCardInfo] = useState<ISingleResponse | null>(null);
  const [openCard, setOpenCard] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res: ISingleResult = await getSingleCharacter(slug);
      const card: ISingleResponse = res.data.attributes;
      setCardInfo(card);
      if (slug) {
        setOpenCard(true);
      }
    };

    fetchData();
  }, [slug]);

  const closeSideBar = () => {
    setOpenCard(false);
    setTimeout(() => navigate('/'), 100);
  };

  return (
    <aside
      className={[styles.container, openCard ? styles.opened : ''].join(' ')}
    >
      <button onClick={closeSideBar}>
        <img src={closeIcon} alt="close" />
      </button>
      {cardInfo && (
        <>
          <h2>{cardInfo.name}</h2>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={cardInfo.image ?? logoIfNull}
              alt="card"
            />
          </div>
          <div>Gender: {cardInfo.gender ?? 'unknown'}</div>
          <div>Species: {cardInfo.species ?? 'unknown'}</div>
          <div>Blood status: {cardInfo.blood_status ?? 'unknown'}</div>
        </>
      )}
    </aside>
  );
};

export default CardInfo;
