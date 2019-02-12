"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _users = _interopRequireDefault(require("./routes/users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var swaggerUi = require('swagger-ui-express');

var app = (0, _express.default)();

var expressSwagger = require('express-swagger-generator')(app);

var db = require('./db/db');

var options = {
  swaggerDefinition: {
    info: {
      description: 'Node JS Starter Code',
      title: 'Node Js Rest API',
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
  files: ['./app/routes/*.js'] // Path to the API handle folder

};
expressSwagger(options);
app.use(_users.default);
var _default = app;
exports.default = _default;