const idTokenKey = 'id_token';

export function setIdToken(token) {
  sessionStorage.setItem(idTokenKey, token);
}

export function getIdToken() {
  return sessionStorage.getItem(idTokenKey);
}

export function removeIdToken() {
  sessionStorage.removeItem(idTokenKey);
}
