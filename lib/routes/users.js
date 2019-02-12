"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _user = require("../controllers/user");

var router = (0, _express.Router)();
router.route('/users')
/**
  * This function comment is parsed by Anshu
  * @route POST /users
  * @group Add a user - Adding a new user
  * @produces application/json
  * @consumes application/json
  * @param {string} name.body.required - user Name
  * @returns {object} 200 - Newly created user
  * @return {object} 500 - Internal Server Error
  */
.post(_user.userController.add).get(_user.userController.getAll);
router.route('/users/:user_id').get(_user.userController.getById).put(_user.userController.update);
var _default = router;
exports.default = _default;