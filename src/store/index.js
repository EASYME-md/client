import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

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
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default createStore;
