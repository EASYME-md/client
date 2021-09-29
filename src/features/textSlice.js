import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'text',
  initialState: {
    value: '',
  },
  reducers: {
    inputText: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { inputText } = slice.actions;

export default slice.reducer;
