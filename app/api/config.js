const baseUrl = 'http://localhost:3000/api/';
import { NOT_AUTHORISED } from '../containers/Authorization/constants';
import { getIdToken } from '../localStorageManager';
import dispatch from 'redux/es/createStore';

export function getHeader(isAuthenticated = false, contentType = 'application/json') {
  const headers = {
    Accept: 'application/json',
    'Content-Type': contentType,
  };
  if (isAuthenticated) {
    headers['x-access-token'] = `${getIdToken()}`;
  }
  return headers;
}

export function getConfig(method, body, headers = null) {
  const config = {
    method,
    headers: headers || getHeader(),
    body,
  };
  return config;
}

export function getUrl(url) {
  return `${baseUrl}${url}`;
}

export function fetchGet(url, headers = null) {
  const config = getConfig('GET', null, headers);
  return fetch(getUrl(url), config)
      .then((response) => {
        if (response.status === 401) {
          dispatch(NOT_AUTHORISED);
        }
        return response.json();
      });
}

export function fetchPost(url, body, headers = null) {
  const config = getConfig('POST', body, headers);
  return fetch(getUrl(url), config).then(response => response.json());
}
