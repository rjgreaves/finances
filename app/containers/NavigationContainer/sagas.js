// import { take, call, put, select } from 'redux-saga/effects';
import { REQUEST_TOPICS, SELECT_TOPIC, REQUEST_TOPICS_SUCEEDED, LOGOUT } from './constants';
import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { requestTopicsSucceeded, requestTopicsFailed, logoutSuccessful } from './actions';
import { push } from 'react-router-redux';
import selectNavigationContainer from './selectors';
import { fetchTopicsFromServer } from "../../api/index";
function* fetchTopics() {
  try{
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceeded(topics));
  }
  catch(e) {
    yield put(requestTopicsFailed(e.messages));
  }
}

function* pushTopic(action) {
  yield put(push(`/topics/${action.topic._id}`));
}

export function* selectDefaultTopicSaga() {
  yield* takeLatest(REQUEST_TOPICS_SUCEEDED, selectDefaultTopic);
}

function* selectDefaultTopic() {
  const state = yield select(selectNavigationContainer());
  if(!state.selectedTopic && state.routerLocation === '/') {
    yield put(push(`/topics/${state.topics[0]._id}`));
  }
}

export function* selectTopicSaga() {
  yield* takeLatest(SELECT_TOPIC, pushTopic);
}

// Individual exports for testing
export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

function* performLogout() {
    //TODO: Call serverside logout??
    yield put(logoutSuccessful());
}

export function* doLogoutSaga() {
  yield* takeLatest(LOGOUT, performLogout)
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
  selectTopicSaga,
  doLogoutSaga,
  selectDefaultTopicSaga,
];
