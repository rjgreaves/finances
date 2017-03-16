var ApiConfig = require("./config");

export function fetchTopicsFromServer() {
    var config = ApiConfig.getHeader(true);
    return ApiConfig.fetchGet(
        "topics",
        {},
        config
    );
}

export function fetchLinksFromServer(topicId) {
    var config = ApiConfig.getHeader(true);
    console.log(config);
    return ApiConfig.fetchGet(
        `topics/${topicId}/links`,
        {},
        config
    );
}

export function createLink({ topicId, url, description }) {
    var config = ApiConfig.getHeader(true);
    return ApiConfig.fetchPost(
        `topics/${topicId}/links`,
        JSON.stringify({
            url,
            description,
            topicId,
        }),
        config
    );
}

export function login(email, password) {
    var headers = ApiConfig.getHeader(false, "application/x-www-form-urlencoded");
    return ApiConfig.fetchPost('login', `email=${email}&password=${password}`, headers);
}

export function authenticateTokenWithServer(token) {
    return ApiConfig.fetchPost('token', `token=${token}`);
}

export function register(email, password) {
    var headers = ApiConfig.getHeader(false, "application/x-www-form-urlencoded");
    return ApiConfig.fetchPost('register', `email=${email}&password=${password}`, headers);
}
