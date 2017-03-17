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

export function requestTopics() {
  return {
    type: REQUEST_TOPICS,
  };
}

export function requestTopicsSucceeded(topics) {
  return {
    type: REQUEST_TOPICS_SUCEEDED,
    topics,
  };
}

export function requestTopicsFailed(message) {
  return {
    type: REQUEST_TOPICS_FAILED,
    message,
  };
}

export function selectTopic(topic) {
  return {
    type: SELECT_TOPIC,
    topic,
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
