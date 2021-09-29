import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'text',
  initialState: {
    value: '',
  },
  reducers: {
    inputText: (state, action) => {
      state.text = action.payload;
    }
  }
});

export const { inputText } = slice.actions;

export default slice.reducer;
