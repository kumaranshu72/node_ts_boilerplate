import express from 'express'

const swaggerUi = require('swagger-ui-express')

const app: express.Application = express()

import * as bodyParser from 'body-parser'

const expressSwagger = require('express-swagger-generator')(app)

const db = require('./db/db')

import router from './routes/users'

const options = {
  swaggerDefinition: {
    basePath: '/',
    host: 'localhost:3000',
    info: {
      description: 'Node Ts Starter Code',
      title: 'Node Ts Rest API',
      version: '1.0.0',
    },
    produces: [
      'application/json',
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        description: '',
        in: 'header',
        name: 'Authorization',
        type: 'apiKey',
      },
    },
  },
  basedir: __dirname, // app absolute path
  files: ['./routes/*.js'], // Path to the API handle folder
}

expressSwagger(options)

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
      extended: true,
    }))

app.use(router)

export default app
