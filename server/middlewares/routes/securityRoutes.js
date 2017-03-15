var UserItem = require("../../Models/UserItem").UserItem;
var bcrypt = require("bcrypt");
var tokenService = require("../../tokenService");
var ClaimTypes = require("../../../security/claimTypes");

module.exports = {

  registerRoutes(app) {

    app.post('/api/token', (req, res) => {
      var token = req.body.token;
      try{
        tokenService.isAuthenticated(token, (decoded) => {
          if(decoded){
            ClaimsHelper.hasClaim(ClaimTypes.UserIdClaimType);
            return res.status(200);
          }
          else {
            return res.status(401);
          }
        });
      }
      catch (e) {
        return res.status(500);
      }
    });

    app.post('/api/login', (req, res) => {

      UserItem.findOne({ email: req.body.email },
        function (err, user) {

          if (err)
            return res.status(500)

          if (!user)
            return res.status(401).send({ errorMessage: 'Credentials not found' });

          bcrypt.compare(req.body.password, user.passwordHash, function (err, doesMatch) {
            if (doesMatch) {
              var claims = {
                  [ClaimTypes.UserIdClaimType]: user._id,
              };
              var token = tokenService.createToken(claims);
              return res.send({ token: token });
            } else {
              return res.status(401).send({ errorMessage: 'Credentials are not valid' });
            }
          });
        }
      );
    });

  }


}
