import Link from 'next/link';

import NotFound from '@/components/shared/UI/NotFound/NotFound';
import Header from '@/components/widgets/Header/Header';

const ServerError = () => {
  return (
    <>
      <Header />
      <NotFound />
      <Link href="/">Go To Main</Link>
    </>
  );
};

export default ServerError;
