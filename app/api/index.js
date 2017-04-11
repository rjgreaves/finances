const ApiConfig = require('./config');

export function fetchNewslettersFromServer() {
  const config = ApiConfig.getHeader(true);
  return ApiConfig.fetchGet(
        'newsletters',
        config
    );
}

export function fetchLinksFromServer(newsletterId) {
  const config = ApiConfig.getHeader(true);
  return ApiConfig.fetchGet(
        `newsletters/${newsletterId}/links`,
        config
    );
}

export function createLink({ newsletterId, url, description }) {
  const config = ApiConfig.getHeader(true);
  return ApiConfig.fetchPost(
        `newsletters/${newsletterId}/links`,
        JSON.stringify({
          url,
          description,
          newsletterId,
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
