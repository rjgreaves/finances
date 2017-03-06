/*
 *
 * LoginContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN,
  LOGIN_FAILED,
} from './constants';

const initialState = fromJS({});

function loginContainerReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      state.set('loginError', '');
      return state.set('email', action.email);
    case LOGIN_FAILED:
      return state.set('loginError', action.errorText)
    default:
      return state;
  }
}

export default loginContainerReducer;
