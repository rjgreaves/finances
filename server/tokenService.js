var jwt = require('jsonwebtoken');
var bcrypt = require("bcrypt");

// TODO: Find a better way to keep this
var secret = 'ilo65DVetcNpnRio8Swl8B7DZdOz_8zyDXClZbPGa8fMjWWV48eMHn9DszSyXx2P';

const tokenService = {    
    createToken (claims) {
        return jwt.sign(claims, secret);
    },
    isAuthenticated (token, cb) {
        jwt.verify(token, secret, cb);
    }
}

module.exports = tokenService;