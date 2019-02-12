"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _v = _interopRequireDefault(require("./v1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create Router
var router = (0, _express.Router)();
router.use('/v1', _v.default); // console.dir(router);

var _default = router;
exports.default = _default;