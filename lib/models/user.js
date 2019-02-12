"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = exports.UserSchema = void 0;

var _mongoose = require("mongoose");

var UserSchema = new _mongoose.Schema({
  createdAt: Date,
  email: String,
  firstName: String,
  lastName: String
});
exports.UserSchema = UserSchema;
var User = (0, _mongoose.model)("User", UserSchema);
exports.User = User;