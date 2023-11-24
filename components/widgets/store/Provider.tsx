import { Provider } from 'react-redux';
import { FC } from 'react';

import { ChildrenType } from '@/types/types';
import { setupStore } from '@/components/widgets/store/store';

const store = setupStore();

const Providers: FC<ChildrenType> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
