"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _getUsers = _interopRequireDefault(require("./getUsers"));

var _users = _interopRequireDefault(require("./users"));

var _hystrix_stream = _interopRequireDefault(require("./hystrix_stream"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.use('/', _users.default);
router.use('/getUsers', _getUsers.default);
router.get('/hystrix.stream', _hystrix_stream.default);
var _default = router;
exports.default = _default;