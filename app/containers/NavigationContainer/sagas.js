// import { take, call, put, select } from 'redux-saga/effects';
import { REQUEST_TOPICS, SELECT_TOPIC, REQUEST_TOPICS_SUCEEDED, LOGOUT } from './constants';
import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { requestNewslettersSucceeded, requestNewslettersFailed, logoutSuccessful } from './actions';
import { push } from 'react-router-redux';
import selectNavigationContainer from './selectors';
import { fetchNewslettersFromServer } from '../../api/index';
import { removeIdToken } from '../../localStorageManager';

function* fetchNewsletters() {
  try {
    const newsletters = yield call(fetchNewslettersFromServer);
    yield put(requestNewslettersSucceeded(newsletters));
  } catch (e) {
    yield put(requestNewslettersFailed(e.messages));
  }
}

function* pushNewsletter(action) {
  yield put(push(`/newsletters/${action.newsletter.id}`));
}

export function* selectDefaultNewsletterSaga() {
  yield* takeLatest(REQUEST_TOPICS_SUCEEDED, selectDefaultNewsletter);
}

function* selectDefaultNewsletter() {
  const state = yield select(selectNavigationContainer());
  if (!state.selectedNewsletter && state.routerLocation === '/') {
    yield put(push(`/newsletters/${state.newsletters[0].id}`));
  }
}

export function* selectNewsletterSaga() {
  yield* takeLatest(SELECT_TOPIC, pushNewsletter);
}

// Individual exports for testing
export function* fetchNewslettersSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchNewsletters);
}

function* performLogout() {
  // TODO: Call serverside logout??
  removeIdToken();
  yield put(logoutSuccessful());
}

export function* doLogoutSaga() {
  yield* takeLatest(LOGOUT, performLogout);
}

// All sagas to be loaded
export default [
  fetchNewslettersSaga,
  selectNewsletterSaga,
  doLogoutSaga,
  selectDefaultNewsletterSaga,
];
