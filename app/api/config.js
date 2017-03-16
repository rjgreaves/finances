var baseUrl = 'http://localhost:3000/api/';
import { NOT_AUTHORISED } from "../containers/Authorization/constants";
import localStorageManager from '../localStorageManager';

export function getHeader(isAuthenticated = false, contentType = "application/json"){
    let headers = {
        Accept: 'application/json',
        'Content-Type': contentType
        //'Content-Type': 'application/x-www-form-urlencoded'
    };
    if (isAuthenticated) {
        headers['x-access-token'] = `${localStorageManager.getIdToken()}`
    }
    return headers;
}

export function getConfig(method, body, headers = null) {
    let config = {
        method: method,
        headers: headers || getHeader(),
        body: body
    }
    return config;
}

export function getUrl(url){
    return `${baseUrl}${url}`;
}

export function fetchGet(url, body, headers = null){
    var config = getConfig("GET", body, headers);
    return fetch(getUrl(url), config)
      .then((response) => {
        if(response.status === 401) {
          dispatch(NOT_AUTHORISED);
        }
        return response.json();
      });
}

export function fetchPost(url, body, headers = null){
    var config = getConfig("POST", body, headers);
    return fetch(getUrl(url), config).then(response => response.json());
}
