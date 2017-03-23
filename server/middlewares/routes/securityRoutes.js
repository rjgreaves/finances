const UserItem = require('../../models/UserItem').UserItem;
const bcrypt = require('bcrypt');
const tokenService = require('../../tokenService');
const ClaimTypes = require('../../../security/claimTypes');

module.exports = {

  registerRoutes(app) {
    app.post('/api/token', (req, res) => {
      tokenService.isAuthenticated(req, res, () =>
        res.status(200)
      );
    });

    app.post('/api/login', (req, res) =>
      UserItem.findOne({ email: req.body.email },
        (err, user) => { // eslint-disable-line consistent-return
          if (err) {
            return res.status(500);
          }
          if (!user) {
            return res.status(401).send({ errorMessage: 'Credentials not found' });
          }

          bcrypt.compare(req.body.password, user.passwordHash, (compareError, doesMatch) => {
            if (doesMatch) {
              const claims = {
                [ClaimTypes.UserIdClaimType]: user.id,
              };
              const token = tokenService.createToken(claims);
              return res.send({ token });
            }
            return res.status(401).send({ errorMessage: 'Credentials are not valid' });
          });
        }
      )
    );
  },


};
