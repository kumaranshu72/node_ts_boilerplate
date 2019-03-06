export const swaggerOptions = {
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
