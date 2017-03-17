// import { take, call, put, select } from 'redux-saga/effects';
import { START_LOGIN, AUTHENTICATE_TOKEN } from './constants';
import { call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import { authenticateToken } from './actions';
import localStorageManager from '../../localStorageManager';

// Individual exports for testing

export function* doAuthenticateTokenSaga() {
  yield* takeLatest(AUTHENTICATE_TOKEN, performAuthenticateToken);
}

function* performAuthenticateToken(action) {
  console.log('Checking token...');
  try {
    const response = yield call(authenticateToken, action.token);
    if (response.status === 401) {
      localStorageManager.setIdToken(null);
      yield put(push('/login'));
    } else {
      localStorageManager.setIdToken(response.token);
    }
  } catch (e) {
    yield put(push('/login'));
  }
}

function* startLogin() {
  yield put(push('/login'));
}

export function* startLoginSaga() {
  yield* takeLatest(START_LOGIN, startLogin);
}

// All sagas to be loaded
export default [
  startLoginSaga,
  doAuthenticateTokenSaga,
];
