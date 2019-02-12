"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var bodyParser = _interopRequireWildcard(require("body-parser"));

var _users = _interopRequireDefault(require("./routes/users"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var swaggerUi = require('swagger-ui-express');

var app = (0, _express.default)();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var expressSwagger = require('express-swagger-generator')(app);

var db = require('./db/db');

var options = {
  swaggerDefinition: {
    info: {
      description: 'Node Ts Starter Code',
      title: 'Node Ts Rest API',
      version: '1.0.0'
    },
    host: 'localhost:3000',
    basePath: '/api/v1',
    produces: ['application/json'],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: ''
      }
    }
  },
  basedir: __dirname,
  // app absolute path
  files: ['./routes/*.js'] // Path to the API handle folder

};
expressSwagger(options);
app.use(_users.default);
var _default = app;
exports.default = _default;