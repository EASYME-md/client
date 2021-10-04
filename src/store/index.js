import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import logger from 'redux-logger';

import contentsReducer, { contents } from '../features/slice';
import { watchContents } from '../features/saga';

export const rootReducer = combineReducers({
  [contents]: contentsReducer,
});

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([
    watchContents()
  ]);
}

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware, logger],
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default createStore;
