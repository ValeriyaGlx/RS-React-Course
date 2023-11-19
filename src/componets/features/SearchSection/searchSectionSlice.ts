import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SearchSectionSliceType } from '../../../types/types';
import { getDataLocalStorage } from '../../shared/lib/localStorage';
import {
  DEFAULT_CARDS,
  DEFAULT_PAGE,
  LOCAL_STORAGE_KEY,
} from '../../shared/constants/constants';

interface SetValuePayload {
  key: keyof SearchSectionSliceType;
  value: string | number | boolean | undefined;
}

const initialState: SearchSectionSliceType = {
  inputValue: getDataLocalStorage(LOCAL_STORAGE_KEY),
  size: DEFAULT_CARDS,
  currentPage: DEFAULT_PAGE,
  totalPages: DEFAULT_PAGE,
  isLoadingCharacters: false,
  isLoadingSingleCharacter: false,
};

const searchSectionSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<SetValuePayload>) => {
      const { key, value } = action.payload;
      return { ...state, [key]: value };
    },
  },
});
export const { setValue } = searchSectionSlice.actions;

export default searchSectionSlice.reducer;
