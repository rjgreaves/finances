const jwt = require('jsonwebtoken');

// TODO: Find a better way to keep this
const secret = 'ilo65DVetcNpnRio8Swl8B7DZdOz_8zyDXClZbPGa8fMjWWV48eMHn9DszSyXx2P';

const tokenService = {
  createToken(claims) {
    return jwt.sign(claims, secret);
  },
  isAuthenticated(req, res, cb) { // eslint-disable-line consistent-return
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, secret, (err, decoded) => { // eslint-disable-line consistent-return
        if (err) {
          return res.status(401).send({
            success: false,
            message: 'Failed to authenticate token.',
          });
        }
        cb(decoded);
      });
    } else {
      return res.status(401).send({
        success: false,
        message: 'Failed to provide token.',
      });
    }
  },
};

module.exports = tokenService;
