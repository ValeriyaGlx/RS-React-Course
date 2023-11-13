import { ReactElement, useEffect, useState } from 'react';

import { STARS_NUMBER } from '../../constants/constants';

import styles from './StarBackground.module.css';

const StarBackground = () => {
  const [stars, setStars] = useState<ReactElement[]>([]);

  const generateStars = () => {
    const numStars = STARS_NUMBER;
    const starElements: ReactElement[] = [];

    for (let i = 0; i < numStars; i += 1) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
      };
      starElements.push(<div className={styles.star} style={style} key={i} />);
    }

    setStars(starElements);
  };

  useEffect(() => {
    generateStars();
  }, []);

  return <div className={styles.stars}>{stars}</div>;
};

export default StarBackground;
