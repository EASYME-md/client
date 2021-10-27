import { createSlice } from '@reduxjs/toolkit';

import WELCOME_MESSAGE from '../constants/welcomeMessage';

const initialState = {
  isLoading: false,
  isSaved: false,
  linkId: '',
  text: '',
  textArea: null,
  fullEditor: false,
  fullMarkdown: false,
  fullScreen: false,
  error: null,
};

const reducers = {
  addLinkId: (state, action) => {
    state.linkId = action.payload;
  },
  addText: (state, action) => {
    state.text = action.payload;
  },
  addTextArea: (state, action) => {
    state.textArea = action.payload;
  },
  resetError: (state) => {
    state.error = null;
  },
  addError: (state, action) => {
    state.error = action.payload;
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
  saveText: (state) => {
    state.isSaved = !state.isSaved;
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

export const contents = slice.name;
export const {
  addLinkId, addText, addTextArea, resetError, addError,
  toggleEditor, toggleMarkdown, toggleFullScreen,
  saveText, load, loadSuccess, loadFail } = slice.actions;

export default slice.reducer;
