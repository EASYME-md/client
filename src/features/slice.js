import { createSelector, createSlice } from '@reduxjs/toolkit';

import WELCOME_MESSAGE from '../constants/welcomeMessage';

const initialState = {
  isLoading: false,
  text: '',
  textArea: null,
  fullEditor: false,
  fullMarkdown: false,
  fullScreen: false,
  error: null,
};

const reducers = {
  addText: (state, action) => {
    state.text = action.payload;
  },
  addTextArea: (state, action) => {
    state.textArea = action.payload;
  },
  resetError: (state) => {
    state.error = null;
  },
  toggleEditor: (state) => {
    state.fullEditor = !state.fullEditor;
  },
  toggleMarkdown: (state) => {
    state.fullMarkdown = !state.fullMarkdown;
  },
  toggleFullScreen: (state) => {
    state.fullScreen = !state.fullScreen;
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
export const {
  addText, addTextArea, resetError,
  toggleEditor, toggleMarkdown, toggleFullScreen,
  load, loadSuccess, loadFail } = slice.actions;

export default slice.reducer;
