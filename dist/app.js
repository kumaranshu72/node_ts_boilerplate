"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swaggerUi = require('swagger-ui-express');
const app = express_1.default();
const bodyParser = __importStar(require("body-parser"));
const expressSwagger = require('express-swagger-generator')(app);
const db = require('./db/db');
const users_1 = __importDefault(require("./routes/users"));
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
    basedir: __dirname,
    files: ['./routes/*.js'],
};
expressSwagger(options);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(users_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map