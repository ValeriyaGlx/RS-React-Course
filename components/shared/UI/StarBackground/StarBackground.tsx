import { FC } from 'react';

import { StarsBackgroundType } from '@/types/types';

import styles from './StarBackground.module.css';

const StarBackground: FC<StarsBackgroundType> = ({ stars }) => {
  return (
    <div className={styles.stars}>
      {stars.map(({ className, style, key }) => (
        <div className={className} style={style} key={key} />
      ))}
    </div>
  );
};

export default StarBackground;
