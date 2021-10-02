import { createSlice } from '@reduxjs/toolkit';

import WELCOME_MESSAGE from '../constants/welcomeMessage';

export const slice = createSlice({
  name: 'contents',
  initialState: {
    text: WELCOME_MESSAGE,
    linkId: '',
  },
  reducers: {
    inputText: (state, action) => {
      state.text = action.payload;
    },
  }
});

export const { inputText } = slice.actions;

export default slice.reducer;
