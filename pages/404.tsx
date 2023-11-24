import Link from 'next/link';
import Image from 'next/image';

import smoke from '@/public/assets/images/smoke.png';
import logo from '@/public/assets/images/logo.png';
import ErrorButton from '@/components/shared/UI/ErrorButton/ErrorButton';
import NotFound from '@/components/shared/UI/NotFound/NotFound';

import headerStyles from '../components/widgets/Header/Header.module.css';
import styles from '../styles/404.module.css';

const NotFoundPage = () => {
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
        <Link href="/" className={styles.button}>
          Go To Main
        </Link>
      </main>
    </>
  );
};

export default NotFoundPage;
