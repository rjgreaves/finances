import {
  AUTHENTICATE_TOKEN,
  START_LOGIN,
} from './constants';

export function authenticateToken() {
  return {
    type: AUTHENTICATE_TOKEN,
  };
}

export function startLogin() {
  return {
    type: START_LOGIN,
  };
}
