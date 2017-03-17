import {
  AUTHENTICATE_TOKEN,
  START_LOGIN,
} from './constants';

export function authenticateToken(token) {
  return {
    type: AUTHENTICATE_TOKEN,
    token,
  };
}

export function startLogin() {
  return {
    type: START_LOGIN,
  };
}
