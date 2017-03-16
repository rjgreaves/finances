/*
 *
 * RegistrationContainer actions
 *
 */

import {
  REGSITER,
  REGISTER_FAILED,
  REGISTER_SUCCESSFUL
} from './constants';

export function register(email, password) {
  return {
    type: REGSITER,
    email,
    password
  };
}

export function registerFailed(message) {
  return {
    type: REGISTER_FAILED,
    message,
  };
}
export function registerSuccessful() {
  return {
    type: REGISTER_SUCCESSFUL,
  };
}
