const bodyParser = require('body-parser');
var uuid = require("uuid");
var database = require("../database");
var tokenService = require("../tokenService");

var TopicRoutes = require('./routes/topicRoutes');
var LinkRoutes = require('./routes/linkRoutes');
var SecurityRoutes = require('./routes/securityRoutes');

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

  TopicRoutes.registerRoutes(app);
  LinkRoutes.registerRoutes(app);
  SecurityRoutes.registerRoutes(app);

};
