const idTokenKey = "id_token";

const localStorageManager = {

    setIdToken: (idToken) => {
        localStorage.setItem(idTokenKey, idToken);
    },

    getIdToken: () => {
        return localStorage.getItem(idTokenKey);
    }

}

module.exports = localStorageManager;