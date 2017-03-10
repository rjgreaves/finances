var jwt = require('jsonwebtoken');
var UserItem = require("../../Models/UserItem").UserItem;
var bcrypt = require("bcrypt");

module.exports = (app) => {

  app.post('/api/login', (req, res) => {
    console.log(req.body);
    UserItem.findOne({ email: req.body.email },
      function (err, user) {

        if (err)
          return res.status(500)

        if (!user)
          return res.status(401).send({ errorMessage: 'Credentials not found' });

        bcrypt.compare(req.body.password, user.passwordHash, function (err, doesMatch) {
          if (doesMatch) {
            var claims = {
              sub: 'user9876',
              iss: 'https://mytrustyapp.com',
              permissions: 'upload-photos'
            };
            var token = jwt.sign(claims, secret);
            return res.send({ token: token });
          } else {
            return res.status(401).send({ errorMessage: 'Credentials are not valid' });
          }
        });
      }
    );
  });


}
