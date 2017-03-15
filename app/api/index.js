var ApiConfig = require("./config");

export function fetchTopicsFromServer() {
    var config = ApiConfig.getHeader(true);
    return ApiConfig.fetchGet(
        "topics"
    ).then(response => response.json());
}

export function fetchLinksFromServer(topicId) {
    var config = ApiConfig.getHeader(true);
    return ApiConfig.fetchGet(
        `topics/${topicId}/links`
    )
        .then(response => response.json());
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
    ).then(response => response.json());
    // return fetch(`http://localhost:3000/api/topics/${topicId}/links`, {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         url,
    //         description,
    //         topicId,
    //     }),
    // }).then(response => response.json());
}

export function login(email, password) {
    var headers = ApiConfig.getHeader(false, "application/x-www-form-urlencoded");
    return ApiConfig.fetchPost('login', `email=${email}&password=${password}`, headers)
        .then(response => response.json());
}