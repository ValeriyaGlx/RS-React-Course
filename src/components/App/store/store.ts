import { combineReducers, configureStore } from '@reduxjs/toolkit';

import uncontrolledFormWidgetReducer from '../../widgets/UncontrollesFormWidget/UncontrolledFormWidgetSlice';

const rootReducer = combineReducers({
  uncontrolledFormWidgetReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
