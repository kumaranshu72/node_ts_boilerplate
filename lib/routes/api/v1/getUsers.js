"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _hystrixjs = require("hystrixjs");

var _requestPromiseNative = _interopRequireDefault(require("request-promise-native"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

var makeRequest = function makeRequest(id) {
  return _requestPromiseNative.default.get({
    uri: 'http://localhost:5000/users'
  });
};

var fallback = function fallback(err, args) {
  console.log('error in fallback', err);
  return Promise.resolve({
    oops: 'from fallback',
    error: err.message,
    args: args
  });
};

var commandBuilder = _hystrixjs.commandFactory.getOrCreate('hystrix_sample').run(makeRequest).timeout(10).fallbackTo(fallback);

var _default = function _default(req, res) {
  var cmd = commandBuilder.build();
  cmd.execute(1).then(function (user) {
    return res.json({
      user: user
    });
  }).then(function (err) {
    console.log('error in catch', err);
    return res.status(500).send({
      error: err.message,
      oops: 'direct error'
    });
  });
};

exports.default = _default;