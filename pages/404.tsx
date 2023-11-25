import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import smoke from '@/public/assets/images/smoke.png';
import logo from '@/public/assets/images/logo.png';
import ErrorButton from '@/components/shared/UI/ErrorButton/ErrorButton';
import NotFound from '@/components/shared/UI/NotFound/NotFound';
import {
  DEFAULT_CARDS,
  DEFAULT_PAGE,
} from '@/components/shared/constants/constants';

import headerStyles from '../components/widgets/Header/Header.module.css';
import styles from '../styles/404.module.css';

const NotFoundPage = () => {
  const router = useRouter();

  const { page, value, size } = router.query;

  const [newPage, newValue, newSize] = [
    page ?? DEFAULT_PAGE,
    value ?? '',
    size ?? DEFAULT_CARDS,
  ];
  return (
    <>
      <header className={headerStyles.header}>
        <Image className={headerStyles.smoke} src={smoke} alt="smoke" />
        <div>
          <Image className={headerStyles.logo} src={logo} alt="logo" />
        </div>
        <ErrorButton />
      </header>
      <main className={styles.main}>
        <NotFound />
        <Link
          href={`/?page=${newPage}&value=${newValue}&size=${newSize}`}
          className={styles.button}
        >
          Go To Main
        </Link>
      </main>
    </>
  );
};

export default NotFoundPage;
