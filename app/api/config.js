var baseUrl = 'http://localhost:3000/api/';

export function getHeader(isAuthenticated = false){
    let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    if (isAuthenticated) {
        headers['x-access-token'] = `${localStorage.getItem('id_token')}`
    }
    return headers;
}

export function getConfig(method, body, isAuthenticated = false) {
    let config = {
        method: method,
        headers: getHeader(isAuthenticated),
        body: body
    }
    return config;
}

export function getUrl(url){
    return `${baseUrl}${url}`;
}

export function fetchGet(url, body, isAuthenticated = false){
    var config = getConfig("GET", body, isAuthenticated);
    return fetch(getUrl(url), config);
}

export function fetchPost(url, body, isAuthenticated = false){
    var config = getConfig("POST", body, isAuthenticated);
    return fetch(getUrl(url), config);
}
