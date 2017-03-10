const bodyParser = require('body-parser');
var uuid = require("uuid");
var database = require("../database");
var TopicItem = require("../Models/TopicItem");
var LinkItem = require("../Models/LinkItem").LinkItem;
var UserItem = require("../Models/UserItem").UserItem;
var bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');

// TODO: Find a better way to keep this
var secret = 'ilo65DVetcNpnRio8Swl8B7DZdOz_8zyDXClZbPGa8fMjWWV48eMHn9DszSyXx2P';

// USAGE
//  app.use('/api/path-you-want-to-protect', jwtCheck);

module.exports = (app) => {

  app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

    // Pass to next layer of middleware
    next();
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/api/topics', (req, res) => {
    TopicItem.find(
      {},
      function (err, docs) {
        if (err) {
          res.send(500);
        }
        res.send(docs);
      }
    );
  });

  app.get('/api/topics/:id/links', (req, res) => {
    TopicItem.findOne(
      { _id: req.params.id },
      { _id: 0, links: 1 },
      function (err, docs) {
        if (err) res.sendStatus(500);
        return res.send(docs.links);
      }
    )
  });

  app.post('/api/topics/:id/links', (req, res) => {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
      jwt.verify(token, secret, function (err, decoded) {
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });
        } else {
          console.log(decoded);
          TopicItem.findOne(
            { _id: req.params.id },
            function (err, doc) {
              if (err) return res.sendStatus(500);

              let link = doc.links.find((docLink) => {
                return docLink.url === req.body.url
              });
              if (!link) {
                link = Object.assign({}, {
                  url: req.body.url,
                  description: req.body.description,
                  voteCount: 0,
                  voters: [],
                });
                doc.links.push(link);
              }

              // Get the link including it's _id
              link = doc.links.find((docLink) => {
                return docLink.url === req.body.url
              });

              doc.save((err, doc) => {
                if (err) return res.status(500).send(err);

                console.log("Returning Link");
                console.log(link);
                return res.send(link);

              })

            }
          )
        }
      });

    } else {
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      });
    }

  });

  app.post('/api/links/:id/vote', (req, res) => {
    const link = db.get('links').find({ id: req.params.id }).value();
    if (link.voters && link.voters.indexOf(req.body.email) > -1) {
      return res.send(403);
    }

    link.voters.push(req.body.email);
    link.voteCount += req.body.increment;
    return res.send(link);
  });

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

};
