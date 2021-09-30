import { createSlice } from '@reduxjs/toolkit';

import WELCOME_MESSAGE from '../constants/welcomeMessage';

export const slice = createSlice({
  name: 'text',
  initialState: {
    value: WELCOME_MESSAGE,
  },
  reducers: {
    inputText: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { inputText } = slice.actions;

export default slice.reducer;
