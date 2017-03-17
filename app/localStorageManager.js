const idTokenKey = 'id_token';

const localStorageManager = {

  setIdToken: (idToken) => {
    sessionStorage.setItem(idTokenKey, idToken);
  },

  getIdToken: () => sessionStorage.getItem(idTokenKey),

  removeToken: () => {
    sessionStorage.removeItem(idTokenKey);
  },

};

module.exports = localStorageManager;
