var baseUrl = 'http://localhost:3000/api/';

export function getHeader(isAuthenticated = false, contentType = "application/json"){
    let headers = {
        Accept: 'application/json',
        'Content-Type': contentType
        //'Content-Type': 'application/x-www-form-urlencoded'
    };
    if (isAuthenticated) {
        headers['x-access-token'] = `${localStorage.getItem('id_token')}`
    }
    return headers;
}

export function getConfig(method, body, headers = null) {
    let config = {
        method: method,
        headers: headers || getHeader(isAuthenticated),
        body: body
    }
    return config;
}

export function getUrl(url){
    return `${baseUrl}${url}`;
}

export function fetchGet(url, body, headers = null){
    var config = getConfig("GET", body, headers);
    return fetch(getUrl(url), config);
}

export function fetchPost(url, body, headers = null){
    var config = getConfig("POST", body, headers);
    return fetch(getUrl(url), config);
}
