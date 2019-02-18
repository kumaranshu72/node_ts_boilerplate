"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getUsers_1 = __importDefault(require("./getUsers"));
const users_1 = __importDefault(require("./users"));
const hystrix_stream_1 = __importDefault(require("./hystrix_stream"));
const router = express_1.Router();
router.use('/', users_1.default);
router.use('/getUsers', getUsers_1.default);
router.get('/hystrix.stream', hystrix_stream_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map