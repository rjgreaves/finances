/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINKS_FAILED,
  REQUEST_LINKS_SUCCEEDED,
  REQUEST_LINKS,
  START_ADD,
} from './constants';

export function startAdd(newsletterId) {
  return {
    type: START_ADD,
    newsletterId,
  };
}

export function requestLinksSucceeded(links) {
  return {
    type: REQUEST_LINKS_SUCCEEDED,
    links,
  };
}

export function requestLinksFailed(message) {
  return {
    type: REQUEST_LINKS_FAILED,
    message,
  };
}

export function requestLinks(newsletterId) {
  return {
    type: REQUEST_LINKS,
    newsletterId,
  };
}
