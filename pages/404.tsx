import HomeLayout from '@/components/widgets/HomeLayout';
import NotFound from '@/components/shared/UI/NotFound/NotFound';

const ServerError = () => {
  return (
    <HomeLayout>
      <NotFound />
    </HomeLayout>
  );
};

export default ServerError;
