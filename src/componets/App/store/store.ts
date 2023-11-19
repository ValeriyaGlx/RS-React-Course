import { combineReducers, configureStore } from '@reduxjs/toolkit';

import searchReducer from '../../features/SearchSection/searchSectionSlice';
import { getCharactersApi } from '../../shared/api/getCharactersApiSlice';

const rootReducer = combineReducers({
  searchReducer,
  [getCharactersApi.reducerPath]: getCharactersApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(getCharactersApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
