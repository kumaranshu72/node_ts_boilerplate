export const CONFIG = {
  grayconnection: 'wan',
  graylogHOST: process.env.GRAYLOGHOST || 'graylog',
  graylogPORT: parseInt(process.env.GRAYLOGPORT, 10) || 12201,
  graymaxChunkSizeLan: 8154,
  graymaxChunkSizeWan: 1420,
  mongoUrl: process.env.MONGO_URL || 'mongodb://mongo/myapp',
  redisPort: parseInt(process.env.REDIS_PORT, 10) || 6379,
  redisUrl: process.env.REDIS_URL || 'redis',
}

export const options = {
  // Path to the API docs
  apis: ['**/*.ts'],
  swaggerDefinition: {
    basePath: '/api/v1',
    host: 'localhost:3000',
    info: {
      description: 'documentation for niyo recharge api',
      title: 'Niyo Recharge API Documentation',
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
