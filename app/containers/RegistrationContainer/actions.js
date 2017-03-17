/*
 *
 * RegistrationContainer actions
 *
 */

import {
  REGISTER,
  // REGISTER_FAILED,
  // REGISTER_SUCCESSFUL,
} from './constants';

export function register(email, password) {
  return {
    type: REGISTER,
    email,
    password,
  };
}

// export function registerFailed(message) {
//   return {
//     type: REGISTER_FAILED,
//     message,
//   };
// }
// export function registerSuccessful() {
//   return {
//     type: REGISTER_SUCCESSFUL,
//   };
// }
