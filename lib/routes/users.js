"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _controllers = require("../controllers");

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
.post(_controllers.userController.add).get(_controllers.userController.getAll);
router.route('/users/:user_id').get(_controllers.userController.getById).put(_controllers.userController.update).delete(_controllers.userController.deleteById);
var _default = router;
exports.default = _default;