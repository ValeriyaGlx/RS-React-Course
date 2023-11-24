import { STARS_NUMBER } from '@/components/shared/constants/constants';
import styles from '@/components/shared/UI/StarBackground/StarBackground.module.css';
import { StarsBackgroundType } from '@/types/types';

const getStarsBackground = (): StarsBackgroundType[] => {
  const numStars = STARS_NUMBER;
  const stars: StarsBackgroundType[] = [];

  for (let i = 0; i < numStars; i += 1) {
    const style = {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
    };
    stars.push({
      className: styles.star,
      style,
      key: i,
    });
  }

  return stars;
};

export default getStarsBackground;
