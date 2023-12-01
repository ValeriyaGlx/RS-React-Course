import { combineReducers, configureStore } from '@reduxjs/toolkit';

import uncontrolledFormWidgetReducer from '../../widgets/UncontrollesFormWidget/UncontrolledFormWidgetSlice';
import countriesList from '../../shared/UI/CountrySelect/CountrySelectSlice';

const rootReducer = combineReducers({
  uncontrolledFormWidgetReducer,
  countriesList,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
