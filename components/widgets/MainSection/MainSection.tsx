import { useRouter } from 'next/router';
import { FC } from 'react';

import { IResult } from '@/types/types';
import ContentContainer from '@/components/widgets/ContentContainer/ContentContainer';

import styles from './MainSection.module.css';

type MainSectionProps = {
  data: IResult | undefined;
};

const MainSection: FC<MainSectionProps> = ({ data }) => {
  const router = useRouter();
  const inputValue = router.query.value;

  const renderCharacterCards = () => {
    return <ContentContainer data={data} />;
    // <Spinner /> :
  };

  return (
    <section className={styles.container}>
      <h1>
        Search Results <span className={styles.request}>{inputValue}</span>:
      </h1>
      {renderCharacterCards()}
    </section>
  );
};

export default MainSection;
