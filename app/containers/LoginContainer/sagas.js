// import { take, call, put, select } from 'redux-saga/effects';
import { LOGIN, CANCEL_LOGIN, LOGIN_FAILED } from './constants';
import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { goBack } from 'react-router-redux';
import { login } from '../../api';
import { loginFailed } from './actions';


// Individual exports for testing

function* performLogin(action){
  try{
    const response = yield call(login, action.email, action.password);
    if(response.errorMessage){
      throw new Error(response.errorMessage);
    }
    else{
      localStorage.setItem('id_token', response.token);
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
