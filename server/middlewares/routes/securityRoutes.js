const UserItem = require('../../models/UserItem').UserItem;
const bcrypt = require('bcrypt');
const tokenService = require('../../tokenService');
const ClaimTypes = require('../../../security/claimTypes');

module.exports = {

  registerRoutes(app) {
    app.get('/api/token', (req, res) => {
      tokenService.isAuthenticated(req, res, (decoded) => {
        const userId = decoded[ClaimTypes.USER_ID_CLAIM_TYPE];
        console.log(`userID:${userId}`);
        UserItem.findOne({ _id: userId },
            (err, user) => { // eslint-disable-line consistent-return
              if (err) {
                console.log(err);
                return res.status(500).send();
              }
              if (!user) {
                return res.status(401).send();
              }
              return res.status(200).send(Object.assign({}, { id: user.id, email: user.email }));
            }
          );
      }
      );
    });

    app.post('/api/login', (req, res) => {
      const email = req.body.email;
      UserItem.findOne({ email },
        (err, user) => { // eslint-disable-line consistent-return
          if (err) {
            return res.status(500);
          }
          if (!user) {
            return res.status(401).send({ errorMessage: 'Credentials not found' });
          }

          bcrypt.compare(req.body.password, user.passwordHash, (compareError, doesMatch) => {
            if (doesMatch) {
              console.log(`userID:${user.id}`);
              const claims = Object.assign({}, {
                [ClaimTypes.USER_ID_CLAIM_TYPE]: user.id,
                [ClaimTypes.USER_EMAIL_CLAIM_TYPE]: email,
              });
              console.log(claims);
              const token = tokenService.createToken(claims);
              return res.send({ token });
            }
            return res.status(401).send({ errorMessage: 'Credentials are not valid' });
          });
        }
      );
    });
  },

};
