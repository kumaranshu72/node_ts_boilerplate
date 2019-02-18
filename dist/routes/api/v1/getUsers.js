"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hystrixjs_1 = require("hystrixjs");
const request_promise_native_1 = __importDefault(require("request-promise-native"));
const router = express_1.Router();
const makeRequest = (id) => request_promise_native_1.default.get({
    uri: 'http://localhost:5000/users',
});
const fallback = (err, args) => {
    console.log('error in fallback', err);
    return Promise.resolve({
        oops: 'from fallback',
        error: err.message,
        args,
    });
};
const commandBuilder = hystrixjs_1.commandFactory.getOrCreate('hystrix_sample')
    .run(makeRequest)
    .timeout(10)
    .fallbackTo(fallback);
exports.default = (req, res) => {
    const cmd = commandBuilder.build();
    cmd.execute(1)
        .then(user => {
        return res.json({
            user,
        });
    }).then((err) => {
        console.log('error in catch', err);
        return res.status(500).send({
            error: err.message,
            oops: 'direct error',
        });
    });
};
//# sourceMappingURL=getUsers.js.map