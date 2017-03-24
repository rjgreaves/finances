const ApiConfig = require('./config');

export function fetchTopicsFromServer() {
  const config = ApiConfig.getHeader(true);
  return ApiConfig.fetchGet(
        'topics',
        config
    );
}

export function fetchLinksFromServer(topicId) {
  const config = ApiConfig.getHeader(true);
  return ApiConfig.fetchGet(
        `topics/${topicId}/links`,
        config
    );
}

export function createLink({ topicId, url, description }) {
  const config = ApiConfig.getHeader(true);
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
  const headers = ApiConfig.getHeader(false, 'application/x-www-form-urlencoded');
  return ApiConfig.fetchPost('login', `email=${email}&password=${password}`, headers);
}

export function authenticateTokenWithServer() {
  const config = ApiConfig.getHeader(true);
  config['cache-control'] = 'no-cache';
  return ApiConfig.fetchGet('token', config);
}

export function register(email, password) {
  const headers = ApiConfig.getHeader(false, 'application/x-www-form-urlencoded');
  return ApiConfig.fetchPost('register', `email=${email}&password=${password}`, headers);
}
