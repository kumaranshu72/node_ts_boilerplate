import express from 'express';

const swaggerUi = require('swagger-ui-express');

const app: express.Application = express();

const expressSwagger = require('express-swagger-generator')(app)

const db = require('./db/db');

import router from './routes/users';

const options = {
  swaggerDefinition: {
    info: {
      description: 'Node JS Starter Code',
      title: 'Node Js Rest API',
      version: '1.0.0',
    },
    host: 'localhost:3000',
    basePath: '/api/v1',
    produces: [
      'application/json',
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: '',
      },
    },
  },
  basedir: __dirname, // app absolute path
  files: ['./app/routes/*.js'], // Path to the API handle folder
};

expressSwagger(options);

app.use(router);

export default app;
