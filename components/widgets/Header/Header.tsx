import Image from 'next/image';

import ErrorButton from '@/components/shared/UI/ErrorButton/ErrorButton';
import SearchSection from '@/components/features/SearchSection/SearchSection';

import smoke from '../../../public/assets/images/smoke.png';
import logo from '../../../public/assets/images/logo.png';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Image className={styles.smoke} src={smoke} alt="smoke" />
      <div>
        <Image className={styles.logo} src={logo} alt="logo" />
      </div>
      <ErrorButton />
      <SearchSection />
    </header>
  );
};

export default Header;
