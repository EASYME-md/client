import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import contentsReducer from './contentsSlice';

export default configureStore({
  reducer: {
    contents: contentsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});
