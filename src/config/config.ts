export const CONFIG = {
  grayconnection: 'wan',
  graylogHOST: process.env.GRAYLOGHOST || 'graylog',
  graylogPORT: parseInt(process.env.GRAYLOGPORT) || 12201,
  graymaxChunkSizeLan: 8154,
  graymaxChunkSizeWan: 1420,
  mongoUrl: process.env.MONGO_URL || 'mongodb://mongo/myapp',
  redisPort: parseInt(process.env.REDIS_PORT) || 6379,
  redisUrl: process.env.REDIS_URL || 'redis',
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
