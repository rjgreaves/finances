/*
 *
 * LoginContainer actions
 *
 */

import {
  LOGIN,
  CANCEL_LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESSFUL,
} from './constants';

export function login(email, password) {
  return {
    type: LOGIN,
    email,
    password
  };
}

export function cancelLogin() {
  return {
    type: CANCEL_LOGIN
  };
}

export function loginFailed(errorText) {
  return {
    type: LOGIN_FAILED,
    errorText
  }
}

export function loginSuccessful(email) {
  return {
    type: LOGIN_SUCCESSFUL,
    email,
  }
}
