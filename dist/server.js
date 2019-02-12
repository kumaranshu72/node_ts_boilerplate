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
const app_1 = __importDefault(require("./app"));
const config = __importStar(require("./config/config"));
const swaggerUi = require('swagger-ui-express');
const expressSwagger = require('express-swagger-generator')(app_1.default);
expressSwagger(config.options);
const PORT = process.env.PORT || 3000;
app_1.default.listen(PORT, () => {
    console.log('Magic Happens on port ' + PORT);
});
//# sourceMappingURL=server.js.map