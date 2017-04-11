/*
 *
 * NavigationContainer actions
 *
 */

import {
  REQUEST_TOPICS,
  REQUEST_TOPICS_SUCEEDED,
  REQUEST_TOPICS_FAILED,
  SELECT_TOPIC,
  TOGGLE_DRAWER,
  LOGOUT,
  LOGOUT_SUCCESSFUL,
} from './constants';

export function requestNewsletters() {
  return {
    type: REQUEST_TOPICS,
  };
}

export function requestNewslettersSucceeded(newsletters) {
  return {
    type: REQUEST_TOPICS_SUCEEDED,
    newsletters,
  };
}

export function requestNewslettersFailed(message) {
  return {
    type: REQUEST_TOPICS_FAILED,
    message,
  };
}

export function selectNewsletter(newsletter) {
  return {
    type: SELECT_TOPIC,
    newsletter,
  };
}

export function toggleDrawer() {
  return {
    type: TOGGLE_DRAWER,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function logoutSuccessful() {
  return {
    type: LOGOUT_SUCCESSFUL,
  };
}
