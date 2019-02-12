"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = {
    mongoUrl: 'mongodb://mongo/myapp',
};
exports.options = {
    basedir: __dirname,
    files: ['../routes/*.js'],
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
};
//# sourceMappingURL=config.js.map