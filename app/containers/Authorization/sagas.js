// import { take, call, put, select } from 'redux-saga/effects';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./constants";
import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { loginUser } from '../../api/auth';
import { loginFailed } from './actions';

// Individual exports for testing
export function* defaultSaga() {
  return;
}

function* performLogin(action){
  try{
    const response = yield call(login, action.email, action.password);
    if(response.errorMessage){
      throw new Error(response.errorMessage);
    }
    else{
      yield put(goBack());
    }
  } catch (e) {
    yield put(loginFailed(e.message));
  }
}

export function* doLoginSaga() {
  yield* takeLatest(LOGIN_REQUEST, performLogin);
}

// Logs the user out
export function* logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    dispatch(receiveLogout())
  }
}

export function* doLogoutSaga() {
  yield* takeLatest(LOGOUT_REQUEST, performLogin);
}


// All sagas to be loaded
export default [
  doLoginSaga,
  doLogoutSaga,
];
