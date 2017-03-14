// import { take, call, put, select } from 'redux-saga/effects';
import { LOGIN, CANCEL_LOGIN, LOGIN_FAILED, LOGOUT, LOGOUT_SUCCESSFUL } from './constants';
import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { goBack } from 'react-router-redux';
import { login } from '../../api';
import { loginFailed, loginSuccessful, logoutSuccessful } from './actions';
import localStorageManager  from "../../localStorageManager";

// Individual exports for testing

function* performLogin(action){
  try{
    const response = yield call(login, action.email, action.password);
    if(response.errorMessage){
      throw new Error(response.errorMessage);
    }
    else{
      localStorageManager.setIdToken(response.token);
      yield put(loginSuccessful(action.email));
      yield put(goBack());
    }
  } catch (e) {
    yield put(loginFailed(e.message));
  }
}

function* handleDone() {
  yield put(goBack());
}

export function* doLoginSaga() {
  yield* takeLatest(LOGIN, performLogin);
}

export function* cancelSaga() {
  yield* takeLatest(CANCEL_LOGIN, handleDone);
}

// All sagas to be loaded
export default [
  doLoginSaga,
  cancelSaga
];
