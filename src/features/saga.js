import { call, put, takeLatest } from 'redux-saga/effects';

import { load, loadSuccess, loadFail } from './slice';
import { fetchContents } from '../api';

function* handleContentsLoad(action) {
  const linkId = action.payload;

  try {
    const text = yield call(() => fetchContents(linkId));

    yield put(loadSuccess(text));
  } catch (err) {
    yield put(loadFail(err));
  }
}

export function* watchContents() {
  yield takeLatest(load, handleContentsLoad);
}
