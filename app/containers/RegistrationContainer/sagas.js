// import { take, call, put, select } from 'redux-saga/effects';
import { REGISTER } from './constants';
import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { goBack } from 'react-router-redux';
import { register } from '../../api';
// import { registerFailed, registerSuccessful } from './actions';

// Individual exports for testing
export function* doRegisterSaga() {
  yield* takeLatest(REGISTER, performRegister);
}

function* performRegister(action) {
  try {
    const response = yield call(register, action.email, action.password);
    if (response.errorMessage) {
      throw new Error(response.errorMessage);
    } else {
      yield put(goBack());
    }
  } catch (e) {
    // yield put(loginFailed(e.message));
  }
}

// All sagas to be loaded
export default [
  doRegisterSaga,
];
