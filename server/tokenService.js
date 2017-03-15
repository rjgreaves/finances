var jwt = require('jsonwebtoken');
var bcrypt = require("bcrypt");

// TODO: Find a better way to keep this
var secret = 'ilo65DVetcNpnRio8Swl8B7DZdOz_8zyDXClZbPGa8fMjWWV48eMHn9DszSyXx2P';

const tokenService = {
    createToken(claims) {
        return jwt.sign(claims, secret);
    },
    isAuthenticated(req, res, cb) {
        var token = req.body.token || req.query.token || req.headers['x-access-token'];
        if (token) {
            jwt.verify(token, secret, (err, decoded) => {
                if (err) {
                    return res.status(401).send({ success: false, message: 'Failed to authenticate token.' });
                } else {
                    cb(decoded)
                }
            });
        } else {
            return res.status(401).send({
                success: false,
                message: 'No token provided.'
            });
        }
    }
}

module.exports = tokenService;
