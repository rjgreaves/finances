// import { take, call, put, select } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { requestLinksSucceeded, requestLinksFailed} from './actions';
import { REQUEST_LINKS, START_ADD } from './constants';
import { push } from 'react-router-redux';
import { fetchLinksFromServer } from "../../api/index";

function* fetchLinks(action) {
  try{
    const links = yield call(fetchLinksFromServer, action.topicId);
    yield put(requestLinksSucceeded(links));
  }
  catch (e) {
    console.log(e);
    yield put(requestLinksFailed(e.message));
  }
}

function* startAdd(action) {
  yield put(push(`/topics/${action.topicId}/add`));
}

export function* startAddSaga() {
  yield* takeLatest(START_ADD, startAdd);
}

// Individual exports for testing
export function* defaultSaga() {
  yield* takeLatest(REQUEST_LINKS, fetchLinks);
}

// All sagas to be loaded
export default [
  defaultSaga,
  startAddSaga,
];
