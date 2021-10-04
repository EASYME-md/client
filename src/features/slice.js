import { createSelector, createSlice } from '@reduxjs/toolkit';

import WELCOME_MESSAGE from '../constants/welcomeMessage';

const initialState = {
  isLoading: false,
  text: WELCOME_MESSAGE,
  error: null,
};

const reducers = {
  inputText: (state, action) => {
    state.text = action.payload;
  },
  resetError: (state) => {
    state.error = null;
  },
  load: (state) => {
    state.isLoading = true;
  },
  loadSuccess: (state, action) => {
    state.isLoading = false;
    state.text = action.payload || WELCOME_MESSAGE;
  },
  loadFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
};

const name = 'contents';
const slice = createSlice({
  name, initialState, reducers,
});

const selectAllState = createSelector(
  state => state.isLoading,
  state => state.text,
  state => state.error,
  (isLoading, text, error) => {
    return { isLoading, text, error };
  }
);

export const contentsSelector = {
  all: state => selectAllState(state[name]),
};

export const contents = slice.name;
export const { inputText, resetError, load, loadSuccess, loadFail } = slice.actions;

export default slice.reducer;
