"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _user = require("../controllers/user");

var router = (0, _express.Router)();
router.get('/', _user.userController.getAll);
var _default = router;
exports.default = _default;