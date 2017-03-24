// import { take, call, put, select } from 'redux-saga/effects';
import { START_LOGIN, AUTHENTICATE_TOKEN } from './constants';
import { call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import { authenticateTokenWithServer } from '../../api/index';
import { removeIdToken } from '../../localStorageManager';
import { loginSuccessful } from '../LoginContainer/actions';

// Individual exports for testing

export function* doAuthenticateTokenSaga() {
  yield* takeLatest(AUTHENTICATE_TOKEN, performAuthenticateToken);
}

function* performAuthenticateToken() {
  console.log('Checking token...');
  try {
    const response = yield call(authenticateTokenWithServer);
    if (response.status === 401) {
      removeIdToken(null);
      yield put(push('/login'));
    } else {
      yield put(loginSuccessful(response.email));
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
