import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { getCharactersApi } from '@/components/shared/api/getCharactersApiSlice';

const rootReducer = combineReducers({
  [getCharactersApi.reducerPath]: getCharactersApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(getCharactersApi.middleware),
  });
};

export type AppStore = ReturnType<typeof setupStore>;

export const wrapper = createWrapper<AppStore>(setupStore);
