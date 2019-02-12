export const CONFIG = {
  mongoUrl: 'mongodb://mongo/myapp',
}

export const options = {
  basedir: __dirname, // app absolute path
  files: ['../routes/api/v1/*.js'], // Path to the API handle folder
  swaggerDefinition: {
    basePath: '/api/v1',
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
}
