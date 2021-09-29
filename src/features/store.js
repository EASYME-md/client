import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import textReducer from './textSlice';

export default configureStore({
  reducer: {
    text: textReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});
